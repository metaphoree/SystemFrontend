import { MonthlyRecievable } from './MonthlyRecievable';

export class WrapperMonthRecievableVM
{
    ListOfData: MonthlyRecievable[];
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