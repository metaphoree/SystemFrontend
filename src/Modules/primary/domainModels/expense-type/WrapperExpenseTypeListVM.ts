import { ExpenseTypeVM } from './ExpenseTypeVM';

export class WrapperExpenseTypeListVM {
    TotalRecoreds: number;
    ListOfData: ExpenseTypeVM[];

    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}