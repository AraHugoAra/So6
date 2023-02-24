function isAuthenticated (req, res, next) {
    if (req.session.user) {
        next()
    }
    else {
        req.session.destroy() //En cas de session corrompue
        res.status(401).json({msg: 'User is not authenticated'})
    }
}

export default isAuthenticated