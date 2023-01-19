import isAuthenticated from '../middleware/isAuthenticated.js'

function postsRoutes(app, db)  {
    // GET posts for home page
    app.get('/posts', async (req, res) => {
        try {
            const posts = await db.query(
                "SELECT posts.id,posts.timestamp,posts.media,posts.body,posts.vegan,users.nickname, users.avatar , COUNT(likes.user_id) as number_of_like "+
                "FROM posts " +
                "INNER JOIN users ON users.id = posts.user_id "+
                "LEFT JOIN likes ON posts.id = likes.target_id AND likes.target_type=0 "+
                "GROUP BY posts.id "+
                "ORDER BY posts.timestamp")
            res.json({status: 200, posts})
        }
        catch(error) {
            res.send(error)
        }
    })

    // GET post for details
    app.get('/posts/:post_id', async (req, res) => {
        const post_id = req.params.post_id
        try {
            const post = await db.query(
                "SELECT posts.id,posts.timestamp,posts.media,posts.body,posts.vegan,users.nickname, users.avatar, COUNT(likes.user_id) as number_of_like "+
                "FROM posts " +
                "INNER JOIN users ON users.id = posts.user_id "+
                "LEFT JOIN likes ON posts.id = likes.target_id WHERE target_type=0 and target_id = ?",
                [post_id]
                )
            res.json({status: 200, post})
        }
        catch(error) {
            res.send(error)
        }
    })

    // GET posts for user profil
    app.get('/users/:user_id/posts', async (req, res) => {
        const user_id = req.params.user_id
        try {
            const posts = await db.query(
                "SELECT posts.id,posts.timestamp,posts.media "+
                "FROM posts " +
                "INNER JOIN users ON users.id = posts.user_id WHERE users.id= (?) "+
                "ORDER BY posts.timestamp",[user_id])
            res.json({status: 200, posts})
        }
        catch(error) {
            res.send(error)
        }
    })

    // POST post
    app.post('/newpost', isAuthenticated, async (req,res) => {
        const user_id = req.session.user[0].id
        const { media, body, vegan = false } = {...req.body}
        try{
            const responseDB = await db.query(
                "INSERT INTO posts (media,body, user_id,vegan) VALUES (?,?,?,?)",
                [media,body, user_id,vegan]
              );
              res.json({ status: 200, responseDB })
        }
        catch(error) {
            res.send(error)
        }
    })
}

export default postsRoutes