import { Test, TestingModule } from '@nestjs/testing';
import { BeverageMarketService } from './beverage-market.service';

describe('BeverageMarketService', () => {
  let service: BeverageMarketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeverageMarketService],
    }).compile();

    service = module.get<BeverageMarketService>(BeverageMarketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
