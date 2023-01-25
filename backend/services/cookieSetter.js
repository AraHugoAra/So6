export default function(app) {
    app.use(function(req, res, next) {
        res.cookie.sameSite = "none"
        next()
    })
}