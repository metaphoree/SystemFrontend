export class IncomeVM {
    Id: string;
    FactoryId: string;
    IncomeTypeId: string;
    IncomeTypeName: string;
    ClientId: string;
    ClientName: string;
    InvoiceId: string;
    InvoiceTypeId: string;
    Month: string;
    Amount: number;
    Description: string;
    EmployeeId: string;
    OccurranceDate: Date;
    Purpose: string;

    constructor() {
        this.Id = '';
        this.FactoryId = '';
        this.IncomeTypeId = '';
        this.IncomeTypeName = '';
        this.ClientId = '';
        this.ClientName = '';
        this.InvoiceId = '';
        this.InvoiceTypeId = '';
        this.Month = '';
        this.Amount = 0;
        this.Description = '';
        this.EmployeeId = '';
        this.OccurranceDate = new Date();
        this.Purpose = '';
    }

}