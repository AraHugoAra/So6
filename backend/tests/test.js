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
    const res = await request(app).get("/users");
    expect(res.body.users).toHaveLength(5);
  });
});

describe("Test the posts path", () => {
  it("should send an array of posts", async () => {
    const res = await request(app).get("/posts");
    expect(res.body.posts).toHaveLength(11);
  });

  it("should send the post when id exists", async () => {
    const res = await request(app).get("/posts/9");
    expect(res.body.post).toHaveLength(1);
    expect(res.body.post[0]).toEqual({
      id: 9,
      timestamp: "2023-01-29T16:31:37.000Z",
      media:
        "https://i.pinimg.com/736x/e1/fa/43/e1fa4375327f1f3519c3eba7cff8a31a.jpg",
      body: "Enfin un réseau saucisssse !!",
      user_id: 11,
      vegan: 0,
      nickname: "Saucisse Addictive 47",
      avatar:
        "http://res.cloudinary.com/drrlu6nxb/image/upload/v1675009194/user_images/ouw46mjtjh83aqjhpskj.png",
    });
  });

  it("should send an error when id doesn't exist", async () => {
    const res = await request(app).get("/posts/1");
    expect(res.statusCode).toEqual(404);
  });

  it("should send posts when user_id exists", async () => {
    const res = await request(app).get("/users/11/posts");
    expect(res.statusCode).toEqual(200);
    expect(res.body.posts).toHaveLength(6)
  });

  it("should send an error when user_id doesn't exist", async () => {
    const res = await request(app).get("/users/1/posts");
    expect(res.statusCode).toEqual(404);
  });
});
