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
    it("should show how many comments user_11 got", async () => {
      const result = await request(app).get("/comments/11");
      expect(result.body.comments).toHaveLength(3);
    });
    it("should show all comments from a post", async () => {
      const result = await request(app).get("/posts/19/comments");
      expect(result.body.comments).toHaveLength(3);
    });
    it("shouldn't show any comments from a post", async () => {
      const result = await request(app).get("/posts/9/comments");
      expect(result.body.comments).toHaveLength(0);
    });
    // it("should create a comment for a post", async () => {
    //   const result = await request(app).post("/posts/9/comments/add");
    //   expect(result.body).toBe(200);
    // });
  });
});
