import express, { json, urlencoded } from "express";
import { createConnection } from "promise-mysql";
import usersRoutes from "./routes/usersRoutes.js";
import commentsRoutes from "./routes/commentsRoutes.js";
import postsRoutes from "./routes/postsRoutes.js";
import likesRoutes from "./routes/likesRoutes.js";
import cookieSetter from "./services/cookieSetter.js";
import sessionManager from "./services/sessionManager.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(json());
app.use(urlencoded({ extended: false }));

const connectionOptions = {
  host: process.env.DB_HOST,
  database:
    process.env.NODE_ENV === "test"
      ? process.env.DB_NAME + "_test"
      : process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
};

sessionManager(app); //Config express-session
cookieSetter(app); //SameSite: Lax

//mysql-promise
const connection = createConnection(connectionOptions);
//connection to DB
connection.then(async (db) => {
  app.get("/", async (req, res) => {
    try {
      res.json({ status: 200, msg: "C'est OK, c'est BAT, c'est IN." });
    } catch (error) {
      res.send(error);
    }
  });
  usersRoutes(app, db);
  commentsRoutes(app, db);
  postsRoutes(app, db);
  likesRoutes(app, db);
});

export { app, connection };
