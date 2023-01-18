import bcrypt from 'bcrypt'
const saltRounds = 10
import jwt from 'jsonwebtoken'

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
    }
    // LOGIN
    // TOKEN

export default usersRoutes



    // // UPDATE
    // app.put('/categories/:catId', async (req, res) => {
    //     const catId = req.params.catId
    //     const newName = req.body.name
    //     try{
    //         const respDB = await db.query(
    //             'UPDATE categories SET name = ? WHERE id = ?'
    //             ,[newName, catId])
    //         res.json({status: 200, respDB})
    //     }
    //     catch(error) {
    //         res.json(error)
    //     }
    // })
    // // DELETE
    // app.delete('/categories/:catId', async (req, res) => {
    //     const catId = req.params.catId
    //     try{
    //         const respDB = await db.query(
    //             'DELETE FROM categories WHERE id = ?'
    //             ,[catId])
    //             res.json({status: 200, respDB})
    //     }
    //     catch(error){
    //         res.json(error)
    //     }
    //     })
    // // ADDITIONAL
    // app.get('/categories/:category_name/toys', async (req, res) => {
    //     const catName = req.params.category_name
    //     try{
    //         const respDB = await db.query(
    //             'SELECT toys.name, toys.id, toys.description, toys.price, categories.name AS category FROM toys INNER JOIN categories ON toys.category = categories.id WHERE categories.name = ?'
    //         , [catName])
    //         res.json({status: 200, respDB})
    //     }
    //     catch(error){
    //         res.json(error)
    //     }
    // })