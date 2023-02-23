import isAuthenticated from "../middleware/isAuthenticated.js"

function likesRoutes(app, db)  {
    //GET for one user and one target
    app.get('/isliked/:targetType/:targetId', isAuthenticated, async(req, res) => {
        const user_id = req.session.user[0].id
        const target_id = req.params.targetId
        const target_type = req.params.targetType
        try {
            const isLiked = await db.query(
                "SELECT id FROM likes " +
                "WHERE (user_id, target_id, target_type) = (?,?,?)",
                [user_id,target_id,target_type]
            )
            if (isLiked.length){
                res.json({status : 200, isLiked : true, likeId : isLiked[0].id})
            }else {
                res.json({status : 200, isLiked : false})
            }
        }
        catch(error) {
            res.send(error)
        }
    })

    //GET for one target
    app.get('/likes/:targetType/:targetId', async(req, res) => {
        const target_id = req.params.targetId
        const target_type = req.params.targetType
        try {
            const likes = await db.query(
                "SELECT target_id, target_type, COUNT(user_id) as number_of_like FROM `likes` WHERE (target_id, target_type) = (?,?)",
                [target_id,target_type]
            )
            res.json({status : 200, likes: likes})
        }
        catch(error) {
            res.send(error)
        }
    })
     ;

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
            console.log(error)
            res.send(error)
        }
    })

    //dislike
    app.delete('/dislike/:id', isAuthenticated, async (req,res) => {
        const user_id = req.session.user[0].id
        const id = req.params.id
        try{
            const responseDB = await db.query(
                "DELETE FROM likes WHERE id = ? AND user_id = ?",
                [id, user_id]
              );
              res.json({ status: 200, responseDB })
        }
        catch(error) {
            res.send(error)
        }
    })
}
 export default likesRoutes