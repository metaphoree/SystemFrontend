export class MonthlyIncome
{

    CreatedDateTime: Date;
    FactoryId: string;
    InvoiceId: string;
    IncomeTypeId: string;
    ClientName: string;
    Month: string;
    Amount: number;
    Purpose: string;

    constructor(){
        this.CreatedDateTime = new Date();
        this.FactoryId= '';
        this.InvoiceId= '';
        this.IncomeTypeId= '';
        this.ClientName= '';
        this.Month= '';
        this.Amount = 0;
        this.Purpose= '';

    }
}