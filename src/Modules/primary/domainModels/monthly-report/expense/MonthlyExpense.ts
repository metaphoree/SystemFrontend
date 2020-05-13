export class MonthlyExpense {
    CreatedDateTime: Date;
    FactoryId: string;
    InvoiceId: string;
    ExpenseTypeId: string;
    ClientName: string;
    Month: string;
    Amount: number;
    Purpose: string;



    constructor() {
        this.CreatedDateTime = new Date();
        this.FactoryId= '';
        this.InvoiceId= '';
        this.ExpenseTypeId= '';
        this.ClientName= '';
        this.Month= '';
        this.Amount = 0;
        this.Purpose= '';
    }
}