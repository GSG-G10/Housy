/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../app');
const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEifQ.ABHyuVZkr37lK6lelg18vAFAApbMj6KGTGhEbm9ROg4';

describe('Get all users', () => {
  test('get all users', async () => {
    const res = await supertest(app)
      .get('/api/v1/user')
      .expect(200)
      .expect('Content-Type', /json/);
    return expect(5).toEqual(res.body.data.length);
  });
});

describe('Tests login route', () => {
  test(' login route /login ', async () => {
    const res = await supertest(app)
      .post('/api/v1/user/login')
      .send({
        email: 'kallport0@patch.com',
        password: '123456789',
      })
      .expect(200);
    return expect(res.body).toEqual({ message: 'You are Logged Successfully' });
  });

  test(' login route /login with error in email or password ', async () => {
    const res = await supertest(app)
      .post('/api/v1/user/login')
      .send({
        email: 'kallport0@patch.com',
        password: '123456987',
      })
      .expect(400);
    return expect(res.body).toEqual({ message: 'Invalid email or password' });
  });
});

describe('user estates', () => {
  test('get users estates', async () => {
    const res = await supertest(app)
      .get('/api/v1/user/3/estates')
      .expect(200)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      data: [
        {
          id: 3,
          agent_id: 3,
          title: 'Amazing house in Galilee',
          price: '847.00',
          description: 'Big beautiful stonehouse with garden and balcony with breathtaking view. A large fireplace and cousy livingroom. A lot of plants and artistic decoration. Harashim lays on top of a mountain in Galilee. Great for relaxing vacation and sightseeing.',
          type: 'sale',
          category: 'villa',
          street: '0824 Mcguire Way',
          city: 'Kungshamn',
          region: 'Galilee',
          bathrooms: 1,
          bedrooms: 3,
          rooms: 3,
          space: '235',
          approved: true,
          rate: '5',
          available: true,
        },
        {
          id: 6,
          agent_id: 3,
          title: 'vestibulum ante ipsum primis',
          price: '194193.55',
          description: 'leo odio porttitor id consequat in consequat ut nulla sed',
          type: 'sale',
          category: 'whole house',
          street: '0891 7th Park',
          city: 'Álimos',
          region: 'Greece',
          bathrooms: 1,
          bedrooms: 3,
          rooms: 2,
          space: '174',
          approved: false,
          rate: '1',
          available: false,
        },
      ],

    });
  });
});

describe('user estates', () => {
  test('get users estates', async () => {
    const res = await supertest(app)
      .get('/api/v1/user/three/estates')
      .expect(404)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'enter valid user id',
    });
  });
});
describe('test signup endpoint with all cases ', () => {
  test('test sign up endpoint when success', async () => {
    const res = await supertest(app)
      .post('/api/v1/user/signup')
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
      .post('/api/v1/user/signup')
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
      .post('/api/v1/user/signup')
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
      .post('/api/v1/user/signup')
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
describe('test Edit Agent data /user/:iduser  ', () => {
  test('test 200', async () => {
    const res = await supertest(app)
      .put('/api/v1/user')
      .set('Cookie', [`token=${userToken}`])
      .send({
        username: 'test',
        email: 'kallport0@patch.com',
        phone: '059985555555',
      })
      .expect(200)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'Agent\'s data updated successfully',
    });
  });

  test('test 400', async () => {
    const res = await supertest(app)
      .put('/api/v1/user')
      .set('Cookie', [`token=${userToken}`])
      .send({
        username: 'test',
        email: 'kallport0@patch.com',
        phone: '0599',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: '"phone" length must be at least 9 characters long',
    });
  });
  test('test 400 when user unknown get token for another user  ', async () => {
    const res = await supertest(app)
      .put('/api/v1/user')
      .set('Cookie', ['token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdTdhbW1hZGFiZWRAZ21haWwuY29tIiwidXNlcklkIjo0LCJpYXQiOjE2MzU5NDkyNTl9.St177PIpsDIHAVke6PxoGC8_cJmUrggpyhEcJ4QWKfI'])
      .send({
        username: 'test',
        email: 'kallport0@patch.com',
        phone: '059915587555',
      })
      .expect(401)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'You are not authorized ',
    });
  });
});
