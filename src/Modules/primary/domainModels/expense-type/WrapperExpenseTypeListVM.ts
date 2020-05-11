import { ExpenseTypeVM } from './ExpenseTypeVM';

export class WrapperExpenseTypeListVM {
    TotalRecords: number;
    ListOfData: ExpenseTypeVM[];

    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}