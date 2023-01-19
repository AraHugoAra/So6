function isAuthenticated (req, res, next) {
    if (req.session.user) next()
    else res.sendStatus(401)
}

export default isAuthenticated