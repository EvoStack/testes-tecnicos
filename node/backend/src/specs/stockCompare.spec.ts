import { describe, it, expect } from '@jest/globals';
import request from 'supertest';
import { app } from '../app';

describe("Query to compare stocks", () => {
    it("Should return a list of StockQuote type", async () => {
      const response = await request(app).post('/stocks/PETR4/compare').send({
        stocks: ['ITUB4', 'BBDC4']
      });

      expect(response.status).toBe(201);

      const stockQuote = {
        name: expect.any(String),
        lastPrice: expect.any(Number),
        pricedAt: expect.any(String),
      };

      response.body.lastPrices.forEach((stock: any) => {
        expect(stock).toEqual(expect.objectContaining(stockQuote));
      });
    });

    it("Should return 404 for a wrong item on stocks body on Compare request", async () => {
      const response = await request(app).post('/stocks/PETR4/compare').send({
        stocks: ['TIMS4', 'ITUB4']
      });

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('errors', expect.any(Array));
    });

    it("Should return 400 for a request withou body", async () => {
      const response = await request(app).post('/stocks/PETR4/compare');

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('errors', expect.any(Array));
    });
});