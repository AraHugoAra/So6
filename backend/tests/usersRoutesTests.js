import session from 'supertest-session'

export default function usersRoutesTests(request, app) {
  describe("Test the users path", () => {
    let testSession
    let authenticatedSession
    beforeEach(async () => {
      testSession = session(app)
      testSession.post('/login').send({email: "thierry47@gmail.com", password: "thierry47"}).expect(200).end(function(err){
        authenticatedSession = testSession
      })
    })
    it("should send an array of all 5 users", async () => {
      const res = await request(app).get("/users");
      expect(res.body.users).toHaveLength(5);
    });
    it("should return an object with the user's attributes", async () => {
      const res = await request(app).get("/users/11");
      expect(res.body.user).toHaveLength(1);
      expect(res.body.user[0]).toEqual({
        id: 11,
        email: "thierry47@gmail.com",
        password: "$2b$10$/7xbNQ4EUVgORz49ZKGRwe4jRWsZl8AXVDQWsqqK69n0J1t6fbJ4K",
        name: "Thierry Garonne",
        avatar:
        "http://res.cloudinary.com/drrlu6nxb/image/upload/v1675009194/user_images/ouw46mjtjh83aqjhpskj.png",
        nickname: "Saucisse Addictive 47",
        timestamp: "2023-01-29T16:20:18.000Z",
      });
    });
    it("should send a 404 status when the user doesn't exist", async () => {
      const res = await request(app).get("/users/0");
      expect(res.status).toEqual(404);
    });
    it("should create a user", async () => {
      const res = await request(app).post("/users/create").send({
        email: "definitly@nota.mock",
        password: "securepw",
        name: null,
        avatar: null,
        nickname: "Real Human",
      });
      expect(res.body.respDB.affectedRows).toEqual(1);
    });
    it("should send an appropriate error message when the wrong field is null", async () => {
      const res = await request(app).post("/users/create").send({
        email: null,
        password: "securepw",
        name: null,
        avatar: null,
        nickname: "Real Human",
      });
      expect(res.body.code).toBe("ER_BAD_NULL_ERROR");
    });
    it("should send an appropriate error message when some data is too long", async () => {
      const res = await request(app).post("/users/create").send({
        email: "012345678901234567890123456789012345678901234567890", //51 chars out of 50
        password: "securepw",
        name: null,
        avatar: null,
        nickname: "Real Human",
      });
      expect(res.body.code).toBe("ER_DATA_TOO_LONG");
    });
    it("should send 401 status when the wrong infos are inputed to login", async () => {
      const res = await request(app)
        .post("/login")
        .send({ email: "foo", password: "bar" });
      expect(res.status).toEqual(401);
    });
    it("should send 200 status when an existing user is loging", async () => {
      const res = await request(app)
        .post("/login")
        .send({ email: "thierry47@gmail.com", password: "thierry47" });
      expect(res.status).toEqual(200);
    });
    it("should assert the authentication", async () => {
      const res = await authenticatedSession.get("/api/auth")
      expect(res.status).toEqual(200)
    })
    it("should NOT assert the authentication", async () => {
      const res = await request(app).get("/api/auth")
      expect(res.status).toEqual(401)
    })
  });
}
