import { Module } from '@nestjs/common';
import { BeverageMarketController } from './beverage-market/beverage-market.controller';
import { BeverageMarketService } from './beverage-market/beverage-market.service';

@Module({
  controllers: [BeverageMarketController],
  providers: [BeverageMarketService]
})
export class BeverageMarketModule {}
