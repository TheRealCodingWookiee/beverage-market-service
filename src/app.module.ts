import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeverageMarketModule } from './beverage-market/beverage-market.module';

@Module({
  imports: [BeverageMarketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
