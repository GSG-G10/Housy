/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../app');
const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

describe('Tests login route to  admin', () => {
  test(' login route /login ', async () => {
    const res = await supertest(app)
      .post('/api/v1/admin/login')
      .send({
        email: 'mohmsal96@gmail.com',
        password: '1234567894455',
      })
      .expect(200);
    return expect(res.body).toEqual({ message: 'You are Logged Successfully' });
  });

  test(' login route /login with error in email or password ', async () => {
    const res = await supertest(app)
      .post('/api/v1/admin/login')
      .send({
        email: 'msal96@gmail.com',
        password: '1234566',
      })
      .expect(400);
    return expect(res.body).toEqual({ message: 'Invalid email or password' });
  });
});

describe('test signup as admin ', () => {
  test('test sign up endpoint when success', async () => {
    const res = await supertest(app)
      .post('/api/v1/admin/signup')
      .send({
        username: 'test',
        password: 'test123456',
        email: 'test@gmail.com',
      })
      .expect(201)
      .expect((response) => expect(response.header['set-cookie'][0].split('=')[0]).toBe('token'))
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'user created',
    });
  });
});
