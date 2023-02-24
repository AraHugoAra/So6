import request from "supertest";
import { app, connection } from "../app";
import { dropData, seedData } from "./initDB";

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

describe("Test the users path", () => {
  it("should send an array of users", async () => { 
    const res = await request(app).get('/users');
    expect(res.body.users).toHaveLength(5);
  })
})
