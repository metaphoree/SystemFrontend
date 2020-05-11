import { IncomeTypeVM } from './IncomeTypeVM';

export class WrapperIncomeTypeListVM {
    TotalRecords: number;
    ListOfData: IncomeTypeVM[];

    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}