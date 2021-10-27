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
});

describe('user estates', () => {
  test('get users estates', async () => {
    const result = await supertest(app).get('/api/v1/users/3/estates');
    expect(result.status).toBe(200);
    expect(result.body.data.length).toBe(1);
  });
});

describe('user estates', () => {
  test('get users estates', async () => {
    const result = await supertest(app).get('/api/v1/users/three/estates');
    expect(result.status).toBe(404);
  });
});
