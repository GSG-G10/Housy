/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../app');
const { dbBuild } = require('../database/config/build');
const connection = require('../database/connection');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

describe('Tests Server', () => {
  test('get all users', async () => {
    const res = await supertest(app)
      .get('/api/v1/users')
      .expect(200)
      .expect('Content-Type', /json/);
    return expect(6).toEqual(res.body.data.length);
  });

  test(' login route /login ', async () => {
    const res = await supertest(app)
      .post('/api/v1/login')
      .send({
        email: 'kallport0@patch.com',
        password: '6D29E04CD937DC37CB72E42736CA238C',
      })
      .expect(200);
    expect(res.body).toEqual({ message: 'You are Logged Successfully' });
  });

  test(' login route /login with error in email or password ', async () => {
    const res = await supertest(app)
      .post('/api/v1/login')
      .send({
        email: 'kallport0@patch.com',
        password: '123456987',
      })
      .expect(400);
    expect(res.body).toEqual({ message: 'Invalid email or passwor' });
  });
});

describe('user estates', () => {
  test('get users estates', async () => {
    const res = await supertest(app)
      .get('/api/v1/users/3/estates')
      .expect(200)
      .expect('Content-Type', /json/);

    return expect(res.body).toEqual({
      data: [
        {
          id: 3,
          agent_id: 3,
          title: 'rhoncus sed vestibulum',
          price: '84726.00',
          description: 'massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in',
          type: 'Buy',
          category: 'House',
          street: '0824 Mcguire Way',
          city: 'Kungshamn',
          region: 'Sweden',
          bathrooms: 1,
          bedrooms: 3,
          rooms: 3,
          space: '235',
          approved: true,
          rate: 5,
          available: false,
        },
      ],
    });
  });
});

describe('user estates', () => {
  test('get users estates', async () => {
    const res = await supertest(app)
      .get('/api/v1/users/three/estates')
      .expect(404)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'enter valid user id',
    });
  });
});
