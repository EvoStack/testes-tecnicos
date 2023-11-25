import { describe, it, expect } from '@jest/globals';
import request from 'supertest';
import { app } from '../app';

describe("Query a stock quote", () => {
    it("Should return a StockQuote type", async () => {
      const response = await request(app).get('/stocks/PETR4.SA/quote');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name', expect.any(String));
      expect(response.body).toHaveProperty('lastPrice', expect.any(Number));
      expect(response.body).toHaveProperty('pricedAt', expect.any(String));
    });

    it("Should return a 404 error", async () => {
      const response = await request(app).get('/stocks/PETR8/quote');

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('errors', expect.any(Array));
    });
});