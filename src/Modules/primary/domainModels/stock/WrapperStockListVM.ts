import { StockVM } from './StockVM';

export class WrapperStockListVM {
    TotalRecords: number;
    ListOfData: StockVM[];
    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}