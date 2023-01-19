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
                'SELECT * FROM comments WHERE user_id = ?'
                ,[id])
            res.json({status: 200, respDB}) 
        }
        catch(error){
            res.json(error)
        }
    })
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
    }

export default commentsRoutes
