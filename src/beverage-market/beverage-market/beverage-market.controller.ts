import { Controller } from '@nestjs/common';
import { BeverageMarketService } from './beverage-market.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('beverage-market')
export class BeverageMarketController {
    constructor(private readonly service: BeverageMarketService) {}

    @EventPattern('order_submitted')
    handleOrder(data: any){
        this.service.handleOrder(data)
    }
}
