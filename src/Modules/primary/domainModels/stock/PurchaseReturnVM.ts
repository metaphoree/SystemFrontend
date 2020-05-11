export class PurchaseReturnVM
{
    SupplierId: string;
    SupplierName: string; //--
    ItemId: string;
    ItemName: string; //
    ItemStatusId: string;
    ItemStatusName: string; // 
    ItemCategoryId: string;
    ItemCategoryName: string; //
    AmountRecieved: number; // --
    UnitPrice: number; //
    TotalAmount: number; //--
    Quantity: number; //
    EmployeeId: string;
    FactoryId: string;
    InvoiceId: string;
    InvoiceTypeId: string;
    InvoiceTypeName: string;// --
    OccurranceDate: Date;
    IsFullyPaid: boolean;
    AmountRecievable : number;
    IncomeTypeId : string;
    constructor(){
        this.SupplierId = '';
        this.SupplierName = ''; //--
        this.ItemId = '';
        this.ItemName = ''; //
        this.ItemStatusId = '';
        this.ItemStatusName = ''; // 
        this.ItemCategoryId = '';
        this.ItemCategoryName = ''; //
        this.AmountRecieved = 0; // --
        this.UnitPrice = 0; //
        this.TotalAmount = 0; //--
        this.Quantity = 0; //
        this.EmployeeId = '';
        this.FactoryId = '';
        this.InvoiceId = '';
        this.InvoiceTypeId = '';
        this.InvoiceTypeName = '';// --
        this.OccurranceDate = new Date();
        this.IsFullyPaid = false;
        this.AmountRecievable = 0;
        this.IncomeTypeId = '';
    }





}