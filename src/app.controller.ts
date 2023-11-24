import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/brokers")
  getAllBrokers():string{
    return this.appService.getAllBrokers()
  }

  @Get("/stocks")
  getAllStocks():string{
    return this.appService.getAllStocks()
  }



}
