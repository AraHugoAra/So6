import request from "supertest";
import { app, connection } from "../app";
import { dropData, seedData } from "./initDB";
import postsRoutesTests from "./postsRoutesTests";

beforeAll(async () => {
  await connection.then(async (db) => {
    //DROP
    await dropData(db);
    //SEED
    await seedData(db);
  });
});

// beforeEach(async () => {
// });

describe("Test the root path", () => {
  it("should sendStatus 200", async () => {
    const res = await request(app).get("/");
    expect(res.status).toEqual(200);
  });
});

postsRoutesTests(request, app)
