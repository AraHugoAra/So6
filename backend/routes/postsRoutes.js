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
    app.get('/post/:post_id', async (req, res) => {
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
    app.get('/posts/:user_id', async (req, res) => {
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

}

export default postsRoutes