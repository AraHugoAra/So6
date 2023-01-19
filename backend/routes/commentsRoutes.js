function commentsRoutes(app, db)  {
    /**
        - GET all
        - GET with userID
        - POST
        - DELETE */

    // INDEX get all
    app.get('/comments', async (req, res) => {
        try {
            const respDB = await db.query('SELECT * FROM comments')
            res.json({status: 200, respDB})
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
            const respDB = await db.query(
                'SELECT * FROM comments WHERE id = ?'
                ,[id])
            res.json({status: 200, respDB}) 
        }
        catch(error){
            res.json(error)
        }
    })
    // CREATE quel chemin ??
    app.post('/comments', async (req, res) => {
        // const body = req.body.body
        const body = "Ceci est mon commentaire n°6 dasn commentsRoutes"
        // const postId = req.params.id
        const postId = 1
        const userId = 2 // Mis en dur pour tester => récupérer l'email du User Connected
        try {
            const respDB = await db.query(
              // 'INSERT INTO comments (body) VALUES (?)'
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
