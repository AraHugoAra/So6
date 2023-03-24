import express, { json, urlencoded } from "express";
import { createPool } from "promise-mysql";
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

sessionManager(app); //Config express-session
cookieSetter(app); //SameSite: Lax

const connection = createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  // database: process.env.NODE_ENV === "test" ? process.env.DB_NAME + '_test' : process.env.DB_NAME,
});

connection.then(async (db) => {
  app.get("/", async (req, res) => {
    try {
      res.json({ status: 200, msg: "C'est OK, c'est BATH, c'est IN." });
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
