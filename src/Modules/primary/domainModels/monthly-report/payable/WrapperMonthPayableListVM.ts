import { MonthlyPayable } from './MonthlyPayable';

export class WrapperMonthPayableListVM
{
    ListOfData: MonthlyPayable[];
    TotalRecords: number;
    constructor() {
        this.ListOfData = [];
        this.TotalRecords = 0;
    }
}