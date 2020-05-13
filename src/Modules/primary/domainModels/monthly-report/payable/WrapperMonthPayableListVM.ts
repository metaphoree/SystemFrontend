import { MonthlyPayable } from './MonthlyPayable';

export class WrapperMonthPayableListVM
{
    ListOfData: MonthlyPayable[];
    TotalRecords: number;
    Total_TillNow: number;
    Total_Monthly: number;
    constructor() {
        this.ListOfData = [];
        this.TotalRecords = 0;
        this.Total_Monthly = 0;
        this.Total_TillNow = 0;
    }
}