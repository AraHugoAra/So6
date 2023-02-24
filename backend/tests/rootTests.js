export default function rootTests(request, app) {
    describe("Test the root path", () => {
      it("should sendStatus 200", async () => {
        const res = await request(app).get("/");
        expect(res.status).toEqual(200);
      });
    });
  }