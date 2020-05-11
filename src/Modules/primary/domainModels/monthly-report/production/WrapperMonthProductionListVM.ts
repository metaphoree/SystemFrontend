import { MonthlyProduction } from './MonthlyProduction';

export class WrapperMonthProductionListVM
{
    TotalRecords: number;
    ListOfData: MonthlyProduction[];
    constructor() {
        this.ListOfData = [];
        this.TotalRecords = 0;
    }
}