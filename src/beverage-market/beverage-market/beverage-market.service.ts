import { Injectable } from '@nestjs/common';

@Injectable()
export class BeverageMarketService {

    handleOrder(data: any) {
        console.log("ordered received")     
    }
}
