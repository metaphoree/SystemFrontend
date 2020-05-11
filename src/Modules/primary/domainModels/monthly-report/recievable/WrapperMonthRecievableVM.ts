import { MonthlyRecievable } from './MonthlyRecievable';

export class WrapperMonthRecievableVM
{
    ListOfData: MonthlyRecievable[];
    TotalRecords: number;
    constructor() {
        this.ListOfData = [];
        this.TotalRecords = 0;
    }
}