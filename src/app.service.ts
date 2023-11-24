import { Injectable } from '@nestjs/common';
import BROKERS from './db/brokers.json';
import STOCKS from './db/stocks.json';

@Injectable()
export class AppService {
  BROKERS = require( './db/brokers.json');
  STOCKS = require("./db/stocks.json");
  getAllBrokers(): string{
    return JSON.stringify(this.BROKERS);
  }

  getAllStocks(): string{
    return JSON.stringify(this.STOCKS);
  }
}
