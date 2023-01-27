import session from 'express-session'

export default function sessionManager(app) {
    app.use(session({
        secret : process.env.SECRET,
        resave : false,
        saveUninitialized : true,
        cookie: {
            secure: false,
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 60 * 60 * 1 * 1000 //secondes . minutes . heures * conversion en ms
        }
    }));
}