import { SalesVM } from './SalesVM';

export class WrapperSalesListVM {
    TotalRecords: number;
    ListOfData: SalesVM[];

    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];

    }
}