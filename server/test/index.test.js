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
