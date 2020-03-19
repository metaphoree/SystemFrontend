import { IncomeTypeVM } from './IncomeTypeVM';

export class WrapperIncomeTypeListVM {
    TotalRecoreds: number;
    ListOfData: IncomeTypeVM[];

    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}