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
            maxAge: 15 * 1 * 1 * 1000 //secondes . minutes . heures * conversion en ms
        }
    }));
}