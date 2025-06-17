const request = require('supertest');
const app = require('../index');

describe('Orders API', () => {
  it('creates a new order', async () => {
    const res = await request(app).post('/order').send({ lat:1, lng:1 });
    if(res.status !== 201) throw new Error('expected 201');
  });

  it('lists orders', async () => {
    const res = await request(app).get('/orders');
    if(!Array.isArray(res.body)) throw new Error('expected array');
  });
});
