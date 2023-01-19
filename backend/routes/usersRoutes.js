import bcrypt from 'bcrypt'
import isAuthenticated from '../middleware/isAuthenticated.js'
const saltRounds = 10

function usersRoutes(app, db)  {
    // INDEX
    app.get('/users', async (req, res) => {
        try {
            const users = await db.query('SELECT * FROM users')
            res.json({status: 200, users})
        }
        catch(error) {
            res.send(error)
        }
    })
    // SHOW
    app.get('/users/:userId', async (req, res) => {
        const userId = req.params.userId
        try{
            const user = await db.query(
                'SELECT * FROM users WHERE id = ?'
                ,[userId])
            res.json({status: 200, user}) 
        }
        catch(error){
            res.json(error)
        }
    })
    // CREATE
    app.post('/users/create', async (req, res) => {
        bcrypt.genSalt(saltRounds, async function(err, salt) {
            bcrypt.hash(req.body.password, salt, async function(err, hash) {
                const { email, name, avatar, nickname } = {...req.body}
                const password = hash 
                try {
                    const respDB = await db.query(
                        'INSERT INTO users (email, password, name, avatar, nickname) VALUES (?, ?, ?, ?, ?)'
                        , [email, password, name, avatar, nickname])
                    res.json({status: 200, respDB})
                }
                catch(error) {
                    res.json(error)
                }
                })
            })
    })
    // LOGIN
    app.post('/login', async (req, res) => {
        try {
            // Validation de la paire email/PW
            const user = await db.query("SELECT * FROM users WHERE email = ?", [req.body.email])
            const matchPassword = await bcrypt.compare(req.body.password, user[0].password)
            if(matchPassword) {
                // regenerate la session,évite certaines formes de "session fixation"
                req.session.regenerate(function (err) {
                    if (err) next(err)
                    // Stockage des infos souhaitées en session
                    req.session.user = user
                    // sauver la session avant la redirection assure que la page charge après les changements de session
                    req.session.save(function (err) {
                        if (err) return next(err)
                        res.redirect('/')
                    })
                })
            }
            else {
                res.json({status: 401, msg:'bad password'})
            }
        }
        catch(error) {
            res.json({status: 401, error})
        }
    })
    // LOGOUT
    app.get('/logout', async (req, res) => {
        req.session.destroy()
        res.redirect('/')
    })
    // TEST DE SESSION / TOKEN
    app.get('/test', isAuthenticated, async (req, res) => {
        const session = req.session
        res.json({status: 200, session})
    })
}

export default usersRoutes