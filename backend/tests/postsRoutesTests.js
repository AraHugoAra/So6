export default function postsRoutesTests(request, app) {
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
          expect(res.body.posts).toHaveLength(6);
        });
      
        it("should send an error when user_id doesn't exist", async () => {
          const res = await request(app).get("/users/1/posts");
          expect(res.statusCode).toEqual(404);
        });
      
        it("should not CREATE a post when user isn't authenticated ", async () => {
          const body = {
            media:
              "https://img.freepik.com/photos-gratuite/saucisses-feu-camp_1161-41.jpg?w=996&t=st=1674117996~exp=1674118596~hmac=eecafd3e3da892ad6c83fc5e7ac6b223664c5493c483b65ccc92578239c690e9",
            body: "Le barbec les boyzzz",
            vegan: false,
          };
          const res = await request(app).post("/newpost").send(body);
          expect(res.status).toEqual(401);
        });
      });
      
    //   describe("Test with auth", () => {
    //     it("should CREATE a post", async () => {
    //       const body = {
    //         media:
    //           "https://img.freepik.com/photos-gratuite/saucisses-feu-camp_1161-41.jpg?w=996&t=st=1674117996~exp=1674118596~hmac=eecafd3e3da892ad6c83fc5e7ac6b223664c5493c483b65ccc92578239c690e9",
    //         body: "Le barbec les boyzzz",
    //         vegan: false,
    //       };
    //       const res = await request(app).post("/newpost").send(body).query(token)
    //       expect(res.status).toEqual(200);
    //     });
    //   });
}