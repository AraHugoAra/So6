import request from 'supertest';
import app from './app.js';
import usersRoutes from './routes/usersRoutes.js';

beforeAll(async () => {
  await usersRoutes.sync({ force: true });
});

beforeEach(async () => {
  await usersRoutes.truncate({ cascade: true, restartIdentity: true });

//   await seed_data();
});

describe('Test the backend routes', () => {
    test('It should response the GET method', async () => {
        await request(app)
            .get('/')
            .then(response => {
                expect(response.statusCode).toBe(200);
            })
    })
})