function postsRoutes(app, db)  {
    // GET posts for home page
    app.get('/posts', async (req, res) => {
        try {
            const respDB = await db.query(
                "SELECT posts.id,posts.timestamp,posts.media,posts.body,posts.vegan,users.nickname, users.avatar , COUNT(likes.user_id) as number_of_like "+
                "FROM posts " +
                "INNER JOIN users ON users.id = posts.user_id "+
                "JOIN likes ON posts.id = likes.target_id WHERE target_type=0 "+
                "GROUP BY likes.target_id "+
                "ORDER BY posts.timestamp")
            res.json({status: 200, respDB})
        }
        catch(error) {
            res.send(error)
        }
    })

    // GET post for details
    app.get('/posts/:post_id', async (req, res) => {
        const post_id = req.params.post_id
        try {
            const respDB = await db.query(
                "SELECT posts.id,posts.timestamp,posts.media,posts.body,posts.vegan,users.nickname, users.avatar, COUNT(likes.user_id) as number_of_like "+
                "FROM posts " +
                "INNER JOIN users ON users.id = posts.user_id "+
                "LEFT JOIN likes ON posts.id = likes.target_id WHERE target_type=0 and target_id = ?",
                [post_id]
                )
            res.json({status: 200, respDB})
        }
        catch(error) {
            res.send(error)
        }
    })

    // GET posts for user profil
    app.get('/user/:user_id/posts', async (req, res) => {
        const user_id = req.params.user_id
        try {
            const respDB = await db.query(
                "SELECT posts.id,posts.timestamp,posts.media "+
                "FROM posts " +
                "INNER JOIN users ON users.id = posts.user_id WHERE users.id= (?) "+
                "ORDER BY posts.timestamp",[user_id])
            res.json({status: 200, respDB})
        }
        catch(error) {
            res.send(error)
        }
    })

    // POST post
    app.post('/newpost', async (req,res) => {
        // const user_id = req.session.user.id
        const user_id = 1

        const media = req.body.media;
        const body = req.body.body;
        const vegan = req.body.vegan || false ;
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