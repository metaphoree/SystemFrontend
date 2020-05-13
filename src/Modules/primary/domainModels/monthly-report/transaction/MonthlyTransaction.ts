export class MonthlyTransaction
{
    Id: string;
    FactoryId: string;
    InvoiceId: string;

    Amount: number;
    //  Amount: string;
    ExecutorId: string;
    ClientId: string;
    
    // PaymentStatusId: string;

    PaymentStatus: string;
    Description: string;
    TransactionType: string;
    //        TransactionTypeId: string;
    Month: string;
    Purpose: string;
    TransactionId: string;
    CreatedDateTime: Date;

    constructor(){
        this.Id= '';
        this.FactoryId= '';
        this.InvoiceId= '';
        this.Amount= 0;
        this.ExecutorId= '';
        this.ClientId= '';
        this.PaymentStatus= '';
        this.Description= '';
        this.TransactionType= '';
        this.Month= '';
        this.Purpose= '';
        this.TransactionId= '';
        this.CreatedDateTime = new  Date();
    }
}