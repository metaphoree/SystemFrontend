import { MonthlyTransaction } from './MonthlyTransaction';

export class WrapperMonthTransactionVM {


    ListOfData: MonthlyTransaction[];

    TotalTillNow_Debit: number;
    TotalTillNow_Credit: number;

    TotalMonthly_Debit: number;
    TotalMonthly_Credit: number;
    TotalRecords: number;

    constructor() {

        this.ListOfData = [];
        this.TotalTillNow_Debit = 0;
        this.TotalTillNow_Credit= 0;
        this.TotalMonthly_Debit= 0;
        this.TotalMonthly_Credit= 0;
        this.TotalRecords = 0;
    }
}