export class MonthlyRecievable {
    ClientName: string;
    InvoiceId: string;
    Amount: number;
    Month: string;
    Purpose: string;
    CreatedDateTime: Date;

    constructor() {
        this.ClientName = '';
        this.InvoiceId = '';
        this.Amount = 0;
        this.Month = '';
        this.Purpose = '';
        this.CreatedDateTime = new Date();
    }
}