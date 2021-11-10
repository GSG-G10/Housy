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

test('api/v1/estate/search ', async () => {
  const res = await supertest(app)
    .get('/api/v1/estate/search?type=rent')
    .expect(200)
    .expect('Content-Type', /json/);
  return expect(res.body.data).toEqual([
    {
      id: 2,
      agent_id: 1,
      title: 'Decorated house',
      price: '242.89',
      description: 'A unique private house with a high wooden ceiling, wide and lit spaces, a yard house surrounded by plants and fruit trees, seating and grass corners. In addition, the house contains games for children of various ages(box games, table tennis, etc.) The house is located in a carriage on a quiet street and within walking distance to a commercial center that Kemer kept open on Saturday as well as for recreational areas ("artists stables")',
      type: 'rent',
      category: 'apartment',
      street: '100 Butternut Hill',
      city: 'Bern',
      region: 'Switzerland',
      bathrooms: 1,
      bedrooms: 2,
      rooms: 2,
      space: '226',
      approved: true,
      rate: '5',
      available: true,
    },
    {
      id: 4,
      agent_id: 2,
      title: 'Ecologic mud house facing Mt Tabor',
      price: '106.71',
      description: 'n the pastoral KIBUTZ Beit Keshet you will find our special ecologic mud house. The house is 130 sqm, with a large garden facing Mt Tabor. 5 min walk will take you to the forest, 25 min driving you will be in the sea of galilee.',
      type: 'rent',
      category: 'villa',
      street: '15918 Mcguire Point',
      city: 'Ranong',
      region: 'Thailand',
      bathrooms: 2,
      bedrooms: 4,
      rooms: 4,
      space: '244',
      approved: true,
      rate: '1',
      available: true,
    },
    {
      id: 5,
      agent_id: 2,
      title: 'in faucibus orci luctus',
      price: '116162.27',
      description: 'parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum',
      type: 'rent',
      category: 'villa',
      street: '898 Dixon Crossing',
      city: 'Gelap',
      region: 'Indonesia',
      bathrooms: 3,
      bedrooms: 2,
      rooms: 4,
      space: '150',
      approved: false,
      rate: '3',
      available: false,
    },
  ]);
});
