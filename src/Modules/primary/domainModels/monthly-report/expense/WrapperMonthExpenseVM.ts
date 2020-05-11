import { MonthlyExpense } from './MonthlyExpense';

export class WrapperMonthExpenseVM {
    ListOfData: MonthlyExpense[];
    TotalRecords: number;

    constructor() {
        this.ListOfData = [];
        this.TotalRecords = 0;
    }
}