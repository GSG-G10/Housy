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
    return expect(3).toEqual(res.body.data.length);
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
        {
          id: 6,
          agent_id: 3,
          title: 'vestibulum ante ipsum primis',
          price: '194193.55',
          description: 'leo odio porttitor id consequat in consequat ut nulla sed',
          type: 'Buy',
          category: 'House',
          street: '0891 7th Park',
          city: 'Álimos',
          region: 'Greece',
          bathrooms: 1,
          bedrooms: 3,
          rooms: 2,
          space: '174',
          approved: false,
          rate: 1,
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
