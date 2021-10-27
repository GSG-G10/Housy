/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../app');
const { dbBuild } = require('../database/config/build');
const connection = require('../database/connection');

beforeEach(() => dbBuild());

describe('All users', () => {
  test('get all users', (done) => {
    supertest(app)
      .get('/api/v1/users')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('You are get all users');
        return done();
      });
  });
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
});

describe('user estates', () => {
  test('get users estates', async () => {
    const result = await supertest(app).get('/api/v1/users/3/estates');
    expect(result.body.message).toBe('get data Successfully !');
  });
});

afterAll(() => connection.end());
