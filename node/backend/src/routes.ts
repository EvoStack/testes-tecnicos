import {Router} from 'express';

import { 
  stockCompareRules,
  stockHistoryRules, 
  validateStockCompare, 
  validateStockHistory 
} from './validations/stocks';

import { StockCompareController, StockHistoryController, StockQuoteController } from './controllers/stock.controller';


const route = Router();


route.get('/stocks/:stock_name/quote', StockQuoteController);

route.get('/stocks/:stock_name/history', validateStockHistory, stockHistoryRules,  StockHistoryController);

route.post('/stocks/:stock_name/compare', validateStockCompare, stockCompareRules, StockCompareController);

export default route;