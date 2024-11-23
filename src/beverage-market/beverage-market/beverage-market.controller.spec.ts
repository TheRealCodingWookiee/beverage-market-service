import { Test, TestingModule } from '@nestjs/testing';
import { BeverageMarketController } from './beverage-market.controller';

describe('BeverageMarketController', () => {
  let controller: BeverageMarketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeverageMarketController],
    }).compile();

    controller = module.get<BeverageMarketController>(BeverageMarketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
