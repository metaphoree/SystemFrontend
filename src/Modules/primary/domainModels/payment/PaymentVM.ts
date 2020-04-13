export class PaymentVM {
    InvoiceId: string;
    InvoiceTypeId: string;
    FactoryId: string;
    EmployeeId: string;
    ClientId: string;
    Amount: number;
    TypeId: string;

    constructor() {

        this.InvoiceId = '';
        this.InvoiceTypeId = '';
        this.FactoryId = '';
        this.EmployeeId = '';
        this.ClientId = '';
        this.Amount = 0;
        // IncomeType or ExpenseType
        this.TypeId = '';
    }

}