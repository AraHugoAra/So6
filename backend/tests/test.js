import request from "supertest";
import app from "../app";
import { connection, seedData } from "./initDB";
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
  //DROP && SEED
  await connection.then(async (db) => {
    seedData(db);
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
  // it("should return empty array", () => {
  //   return request(app).get('/test').then(res => {expect(res.test).not.toBeFalsy()})
  // })
});
