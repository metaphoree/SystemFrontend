import { MonthlyIncome } from './MonthlyIncome';

export class WrapperMonthIncomeVM
{
    ListOfData: MonthlyIncome[];
    TotalRecords: number;

    constructor() {
        this.ListOfData = [];
        this.TotalRecords = 0;
    }
}