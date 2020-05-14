export class ExpenseVM {
    Id: string;
    FactoryId: string;
    ExpenseTypeId: string;
    ExpenseTypeName: string;
    ClientId: string;
    ClientName: string;
    InvoiceId: string;
    InvoiceTypeId: string;
    Month: string;
    Amount: number;
    Description: string;
    EmployeeId: string;
    OccurranceDate: Date;
    Purpose : string;
















    constructor(){
    this.Id = '';
    this.FactoryId = '';
    this.ExpenseTypeId = '';
    this.ExpenseTypeName = '';
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