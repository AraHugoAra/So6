import request from "supertest";
import { app, connection } from "../app";
import { dropData, seedData } from "./initDB";
import postsRoutesTests from "./postsRoutesTests";
import rootTests from "./rootTests";
import usersRoutesTests from "./usersRoutesTests.js";

beforeAll(async () => {
  //CONNECT
  await connection.then(async (db) => {
    //DROP
    await dropData(db);
    //SEED
    await seedData(db);
  });
});

rootTests(request, app)
usersRoutesTests(request, app)
postsRoutesTests(request, app)