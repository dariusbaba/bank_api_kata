import request from 'supertest';
import { app } from '../app';

describe('POST account', () => {
  it.only('should create a new account', async () => {
    const res = await request(app).post('/accounts').send({ balance: 100 });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toMatchObject({ balance: 100 });
  });

});

