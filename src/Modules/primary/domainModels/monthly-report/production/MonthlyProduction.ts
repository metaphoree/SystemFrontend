export class MonthlyProduction {
    StaffName: string;
    ItemName: string;
    ItemCategoryName: string;
    Quantity: number;
    Unitprice: number;
    TotalAmount: number;
    CreatedDateTime: Date;

    Month: string;
    Id: string;
    FactoryId: string;

    constructor() {
        this.StaffName = '';
        this.ItemName = '';
        this.ItemCategoryName = '';
        this.Quantity = 0;
        this.Unitprice = 0;
        this.TotalAmount = 0;
        this.CreatedDateTime = new Date();
        this.Month = '';
        this.Id = '';
        this.FactoryId = '';

    }

}