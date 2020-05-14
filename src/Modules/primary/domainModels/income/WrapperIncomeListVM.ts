import { IncomeVM } from './IncomeVM';

export class WrapperIncomeListVM {
    TotalRecords: number;
    ListOfData: IncomeVM[];

    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}