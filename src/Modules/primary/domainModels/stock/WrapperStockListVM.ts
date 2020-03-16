import { StockVM } from './StockVM';

export class WrapperStockListVM {
    TotalRecoreds: number;
    ListOfData: StockVM[];
    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}