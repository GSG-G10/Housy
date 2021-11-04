/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../app');
const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');

const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEifQ.ABHyuVZkr37lK6lelg18vAFAApbMj6KGTGhEbm9ROg4';

beforeEach(() => dbBuild());
afterAll(() => connection.end());
test('edit estates erorr', async () => {
  const res = await supertest(app)
    .put('/api/v1/estate/350')
    .send({
      title: '1',
      price: 10,
      description: 's',
      type: 's',
      category: 's',
      street: 's',
      city: 's',
      region: 's',
      bathrooms: 1,
      bedrooms: 1,
      rooms: 1,
      space: 50,
      available: false,
    })
    .expect(400)
    .expect('Content-Type', /json/);
  return expect(res.body.message).toBe('enter valid estate id ');
});

describe('Delete Specific Estate By Using Id', () => {
  test('/estate/:estateId status 200 ', async () => {
    const res = await supertest(app)
      .delete('/api/v1/estate/1')
      .set('Cookie', [`token=${userToken}`])
      .expect(200)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'Estate deleted successfully',
    });
  });
  test('/estate/:estateId status 400, when delete the same estate was deleted or not found ', async () => {
    const res = await supertest(app)
      .delete('/api/v1/estate/100')
      .set('Cookie', [`token=${userToken}`])
      .expect(400)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'You can\'t complete this process at the moment',
    });
  });
  test('/estate/:estateId status 400, Invalid estate id ', async () => {
    const res = await supertest(app)
      .delete('/api/v1/estate/-121')
      .set('Cookie', [`token=${userToken}`])
      .expect(400)
      .expect('Content-Type', /json/);
    return expect(res.body).toEqual({
      message: 'Invalid estate id',
    });
  });
});

describe('user estates', () => {
  test('edit estates', async () => {
    const res = await supertest(app)
      .put('/api/v1/estate/3')
      .send({
        title: '1',
        price: 10,
        description: 's',
        type: 's',
        category: 's',
        street: 's',
        city: 's',
        region: 's',
        bathrooms: 1,
        bedrooms: 1,
        rooms: 1,
        space: 50,
        available: false,
      })
      .expect(200)
      .expect('Content-Type', /json/);
    return expect(res.body.message).toBe('Estate updated successfully');
  });
});
