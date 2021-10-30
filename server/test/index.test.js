/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../app');
const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

// describe('Tests Server', () => {
//   test('get all users', async () => {
//     const res = await supertest(app)
//       .get('/api/v1/users')
//       .expect(200)
//       .expect('Content-Type', /json/);
//     return expect(6).toEqual(res.body.data.length);
//   });
// });

// describe('user estates', () => {
//   test('get users estates', async () => {
//     const res = await supertest(app)
//       .get('/api/v1/users/3/estates')
//       .expect(200)
//       .expect('Content-Type', /json/);

//     return expect(res.body).toEqual({
//       data: [
//         {
//           id: 3,
//           agent_id: 3,
//           title: 'rhoncus sed vestibulum',
//           price: '84726.00',
//           description: 'massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in',
//           type: 'Buy',
//           category: 'House',
//           street: '0824 Mcguire Way',
//           city: 'Kungshamn',
//           region: 'Sweden',
//           bathrooms: 1,
//           bedrooms: 3,
//           rooms: 3,
//           space: '235',
//           approved: true,
//           rate: 5,
//           available: false,
//         },
//       ],
//     });
//   });
// });

// describe('user estates', () => {
//   test('get users estates', async () => {
//     const res = await supertest(app)
//       .get('/api/v1/users/three/estates')
//       .expect(404)
//       .expect('Content-Type', /json/);
//     return expect(res.body).toEqual({
//       message: 'enter valid user id',
//     });
//   });
// });

describe('test signup endpoint with all cases ', () => {
  test('test sign up endpoint when success', async () => {
    const res = await supertest(app)
      .post('/api/v1/users/signup')
      .send({
        username: 'test',
        password: 'test123456',
        email: 'test@gmail.com',
        phone: '0597853626',
        confirmedPassword: 'test123456',
      })
      .expect(201)
      .expect((response) => expect(response.header['set-cookie'][0].split('=')[0]).toBe('token'))
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'user created',
    });
  });

  test('test signup error validation phone" length must be 10 characters long ', async () => {
    const res = await supertest(app)
      .post('/api/v1/users/signup')
      .send({
        username: 'Kai',
        password: '1234567894455',
        email: 'kallport0@patch.com',
        phone: '677',
        confirmedPassword: '1234567894455',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: '"phone" length must be at least 9 characters long',
    });
  });
  test('test signup username or phone already exists ', async () => {
    const res = await supertest(app)
      .post('/api/v1/users/signup')
      .send({
        username: 'Kai',
        password: '1234567894455',
        email: 'kallport0@patch.com',
        phone: '0599832683',
        confirmedPassword: '1234567894455',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'The user is already exists',
    });
  });
  test('test signup confirmpassword ', async () => {
    const res = await supertest(app)
      .post('/api/v1/users/signup')
      .send({
        username: 'test',
        password: 'test123456',
        email: 'test@gmail.com',
        phone: '0597853626',
        confirmedPassword: 'test12345',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: '"confirmedPassword" must be [ref:password]',
    });
  });
});
