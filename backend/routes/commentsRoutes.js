import isAuthenticated from "../middleware/isAuthenticated.js"

function commentsRoutes(app, db)  {

    // INDEX get all
    app.get('/comments', async (req, res) => {
        try {
            const comments = await db.query('SELECT * FROM comments')
            res.json({status: 200, comments})
        }
        catch(error) {
            res.send(error)
        }
    })
    // get all with user id
    // SHOW
    app.get('/comments/:id', async (req, res) => {
        const id = req.params.id
        try{
            const comments = await db.query(
                'SELECT * FROM comments WHERE user_id = ?'
                ,[id])
            res.json({status: 200, comments}) 
        }
        catch(error){
            res.json(error)
        }
    })

    // CREATE 
    app.post('/posts/:id/comments/add',isAuthenticated, async (req, res) => {
        const body = req.body.body
        const postId = req.params.id
        const userId = req.session.user[0].id
        try {
            const respDB = await db.query(
              "INSERT INTO comments(body, post_id, user_id) VALUES(?, ?, ?)",
              [
                body, 
                postId, 
                userId]
            );
            res.json({status: 200, respDB})
        }
        catch(error) {
            res.json(error)
        }
    })
}

export default commentsRoutes
