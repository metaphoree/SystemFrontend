import { ExpenseVM } from './ExpenseVM';

export class WrapperExpenseListVM
{
    ListOfData: ExpenseVM[];
    TotalRecords: number;
    constructor(){
        this.ListOfData = [];
        this.TotalRecords = 0;
    }
}