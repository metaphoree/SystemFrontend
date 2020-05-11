export class MonthlyPayable {
    ClientName: string;
    InvoiceId: string;
    Amount: number;
    Purpose: string;
    Month: string;
    CreatedDateTime: Date;

    constructor() {
        this.ClientName = '';
        this.InvoiceId = '';
        this.Amount = 0;
        this.Purpose = '';
        this.Month = '';
        this.CreatedDateTime = new Date();
    }
}