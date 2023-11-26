export interface NewStock {
  code: string;
  price: number;
  quantity: number;
  date: string;
}

export interface StockQuote {
  name: string;
  lastPrice: number;
  pricedAt: string;
}

export interface StockPricing {
  opening: number;
  low: number;
  high: number;
  closing: number;
  pricedAt: string;
}

export interface StockHistory {
  name: string;
  prices: StockPricing[];
}