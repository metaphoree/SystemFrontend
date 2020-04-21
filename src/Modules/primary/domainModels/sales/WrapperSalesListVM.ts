import { SalesVM } from './SalesVM';

export class WrapperSalesListVM {
    TotalRecoreds: number;
    ListOfData: SalesVM[];

    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];

    }
}