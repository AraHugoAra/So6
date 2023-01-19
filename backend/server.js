import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import cors from "cors"
import { createConnection } from 'promise-mysql'
import session from 'express-session'
import usersRoutes from './routes/usersRoutes.js'
import postsRoutes from './routes/postsRoutes.js'
dotenv.config()

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({extended: false}))
app.use(session({
    secret : process.env.SECRET,
    resave : true,
    saveUninitialized : true,
    cookie: {
        originalMaxAge: 3600000
    }
  }));

const connectionOptions = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    port: process.env.DB_PORT
}

createConnection(connectionOptions)
    .then(async (db) => {
        app.get('/', async (req, res) => {
            try {
                res.json({status: 200, msg: "C'est OK, c'est BAT, c'est IN."})
            }
            catch(error) {
                res.send(error)
            }
        })
        usersRoutes(app, db)
        postsRoutes(app,db)
    })

app.listen(port, () => {console.log(`🏃💨 Server is running on port ${port}`)})