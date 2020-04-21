export class StaffHistory {
    StaffId: string;
    StaffName: string;
    InvoiceId: string;
    ItemId: string;
    ItemName: string;
    CategoryId: string;
    CategoryName: string;
    UnitPrice: number;
    Quantity: number;
    PaidAmount: number;
    RecievedAmount: number;
    PayableAmount: number;
    RecievableAmount: number;
    OccurranceDate: Date;
    Type: string;
    InvoiceTotalAfterDiscount : number;
    constructor() {
    this.InvoiceTotalAfterDiscount = 0;
    this.StaffId = '';
    this.StaffName = '';
    this.InvoiceId = '';
    this.ItemId = '';
    this.ItemName = '';
    this.CategoryId = '';
    this.CategoryName = '';
    this.UnitPrice = 0;
    this.Quantity = 0;
    this.PaidAmount = 0;
    this.RecievedAmount = 0;
    this.PayableAmount = 0;
    this.RecievableAmount = 0;
    this.OccurranceDate = new Date();;
    this.Type = '';


}

}