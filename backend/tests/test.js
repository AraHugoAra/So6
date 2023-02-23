import request from "supertest";
import app from "../app";
import { connection, dropData, seedData } from "./initDB";
import usersRoutes from "../routes/usersRoutes.js";
import commentsRoutes from "../routes/commentsRoutes.js";
import postsRoutes from "../routes/postsRoutes.js";
import likesRoutes from "../routes/likesRoutes.js";

beforeAll(async () => {
  await connection.then(async (db) => {
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
});

beforeEach(async () => {
  //DROP
  await connection.then(async (db) => {
    await dropData(db);
  });
  //SEED
  await connection.then(async (db) => {
    await seedData(db);
  });
});

describe("Test the root path", () => {
  it("should sendStatus 200", () => {
    return request(app)
      .get("/")
      .then((res) => {
        expect(res.status).toEqual(200);
      });
  });
});

describe("Test the users path", () => {
  it("should send an array of users", () => { 
    return request(app)
      .get('/users')
      .then((data) => {
        expect(data._body.users).toHaveLength(5)
      })
  })
})
