export class SalesReturnVM {
    CustomerId: string;
    CustomerName: string; //--


    ItemId: string;
    ItemName: string; //--


    ItemStatusId: string;
    ItemStatusName: string; //--


    ItemCategoryId: string;
    ItemCategoryName: string; //--



    AmountPayable: number;
    AmountPaid: number; //--
    TotalAmount: number; //--
    UnitPrice: number; //--
    Quantity: number; //--
    EmployeeId: string;
    FactoryId: string;
    InvoiceId: string;
    InvoiceTypeId: string;
    InvoiceTypeName: string;
    OccurranceDate: Date; //--

    IsFullyPaid: boolean;
    ExpenseTypeId: string;

    constructor() {
        this.CustomerId = '';
        this.CustomerName = ''; //--
        this.ItemId = '';
        this.ItemName = ''; //--
        this.ItemStatusId = '';
        this.ItemStatusName = ''; //--
        this.ItemCategoryId = '';
        this.ItemCategoryName = ''; //--
        this.AmountPaid = 0; //--
        this.TotalAmount = 0; //--
        this.UnitPrice = 0; //--
        this.Quantity = 0; //--
        this.EmployeeId = '';
        this.FactoryId = '';
        this.InvoiceId = '';
        this.InvoiceTypeId = '';
        this.InvoiceTypeName = '';
        this.OccurranceDate = new Date(); //--
        this.IsFullyPaid = false;
        this.AmountPayable = 0;
        this.ExpenseTypeId = '';
    }

}