/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../app');
const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');

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

describe('Delete Specific Estate By Using Id', () => {
  test('/estate/:estateId status 200 ', async () => {
    const res = await supertest(app)
      .delete('/api/v1/estate/1')
      .expect(200)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'Estate deleted successfully',
    });
  });
  test('/estate/:estateId status 400, when delete the same estate was deleted or not found ', async () => {
    const res = await supertest(app)
      .delete('/api/v1/estate/100')
      .expect(400)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'You can\'t complete this process at the moment',
    });
  });
  test('/estate/:estateId status 400, Invalid estate id ', async () => {
    const res = await supertest(app)
      .delete('/api/v1/estate/-121')
      .expect(400)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'Invalid estate id',
    });
  });
});
