import request from "supertest";
import { app, connection } from "../app";
import { dropData, seedData } from "./initDB";

beforeAll(async () => {
  //CONNECT
  await connection.then(async (db) => {
    //DROP
    await dropData(db);
    //SEED
    await seedData(db);
  });
});

describe("Test the root path", () => {
  it("should sendStatus 200", async () => {
    const res = await request(app).get("/");
    expect(res.status).toEqual(200);
  });
});

describe("Test the users path", () => {
  it("should send an array of all 5 users", async () => {
    const res = await request(app).get("/users");
    expect(res.body.users).toHaveLength(5);
  });

  describe("Test comments path", () => {
    it("should send a 200 when connected to all comments", async () => {
      const result = await request(app).get("/comments");
      expect(result.statusCode).toBe(200);
    });
    it("should show how many comments user_id 11 got", async () => {
      const result = await request(app).get('/comments/11');
      expect(result.body.comments).toHaveLength(3)
    })
  });
});
