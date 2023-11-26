import { Request, Response, NextFunction } from 'express';
import {
  query, 
  param, 
  validationResult,
  body
} from 'express-validator';


export const validateStockHistory = [
  query('from').notEmpty().withMessage('A data inicial é obrigatória').isISO8601().withMessage('Data deve ser uma data válida no formato ISO8601'),
  query('to').notEmpty().withMessage('A data final é obrigatória').isISO8601().withMessage('Data deve ser uma data válida no formato ISO8601'),
];

export const stockHistoryRules = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  } else {
    next();
  }

}

export const validateStockGains = [
  query('purchasedAmount').notEmpty().withMessage('O valor investido é obrigatório').isNumeric().withMessage('O valor investido deve ser um número'),
  query('purchasedAt').notEmpty().withMessage('A data de compra é obrigatória').isISO8601().withMessage('Data deve ser uma data válida no formato ISO8601'),
];

export const stockGainsRules = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  } else {
    next();
  }

}

export const validateRange = (from: string, to: string) => {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const differenceInMilliseconds = toDate.getTime() - fromDate.getTime();
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 3600 * 24));
  let range = '';
  if(differenceInDays <= 5) {
    range = '5d';
  } else if(differenceInDays <= 30) {
    range = '1mo';
  } else if(differenceInDays <= 90) {
    range = '3mo';
  } else if(differenceInDays <= 180) {
    range = '6mo';
  } else if(differenceInDays <= 365) {
    range = '1y';
  } else if(differenceInDays <= 730) {
    range = '2y';
  } else if(differenceInDays <= 1825) {
    range = '5y';
  } else if(differenceInDays <= 3650) {
    range = '10y';
  }

  return range;
}

export const validateStockCompare = [
  body('stocks').notEmpty().withMessage('A lista de ações é obrigatória').isArray().withMessage('A lista de ações deve ser um array'),
];

export const stockCompareRules = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  } else {
    next();    
  }

}