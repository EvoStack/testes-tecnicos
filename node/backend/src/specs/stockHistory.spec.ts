import { describe, it, expect } from '@jest/globals';
import request from 'supertest';
import { app } from '../app';

describe("Query a stock history", () => {
    it("Should return a StockHistory type", async () => {
      const response = await request(app).get('/stocks/PETR4.SA/history?from=2021-03-01&to=2021-03-10');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name', expect.any(String));
      expect(response.body).toHaveProperty('prices', expect.any(Array));

    });

    it(" Query a stock history should return a 404 error", async () => {
      const response = await request(app).get('/stocks/PETR8/history?from=2021-03-01&to=2021-03-10');

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('errors', expect.any(Array));
    });

    it("Query a stock history should return a 400 error", async () => {
      const response = await request(app).get('/stocks/PETR8/history');

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('errors', expect.any(Array));
    });

    it(" Query a stock history should reject date format invalid with a 400 error", async () => {
      const response = await request(app).get('/stocks/PETR4/history?from=20210301&to=20210310');

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('errors', expect.any(Array));
    });
});