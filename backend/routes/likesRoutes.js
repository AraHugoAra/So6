import isAuthenticated from "../middleware/isAuthenticated.js"

function likesRoutes(app, db)  {
    //GET
    app.get('/isliked/:targetType/:targetId', isAuthenticated, async(req, res) => {
        const user_id = req.session.user[0].id
        const target_id = req.params.targetId
        const target_type = req.params.targetType
        try {
            const isLiked = await db.query(
                "SELECT * FROM likes " +
                "WHERE (user_id, target_id, target_type) = (?,?,?)",
                [user_id,target_id,target_type]
            )
            if (isLiked.length){
                res.json({status : 200, isLiked : true})
            }else {
                res.json({status : 200, isLiked : false})
            }
        }
        catch(error) {
            res.send(error)
        }
    })

    //like
    app.post('/like', isAuthenticated, async (req,res) => {
        const user_id = req.session.user[0].id
        const { target_id, target_type} = {...req.body}
        try{
            const responseDB = await db.query(
                "INSERT INTO likes (user_id, target_id,target_type) VALUES (?,?,?)",
                [user_id, target_id,target_type]
              );
              res.json({ status: 200, responseDB })
        }
        catch(error) {
            res.send(error)
        }
    })

    //dislike
    app.delete('/dislike/:id', isAuthenticated, async (req,res) => {
        const id = req.params.id
        try{
            const responseDB = await db.query(
                "DELETE FROM utilisateur WHERE id = ?",
                [id]
              );
              res.json({ status: 200, responseDB })
        }
        catch(error) {
            res.send(error)
        }
    })
}
 export default likesRoutes