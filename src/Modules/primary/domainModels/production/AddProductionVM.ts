export class AddProductionVM {
    Id: string;
    FactoryId: string;
    StaffId: string;
    StaffName: string;
    InvoiceTypeId: string;
    ItemId: string;
    ItemStatusName: string;
    ItemStatusId: string;
    ItemName: string;
    ItemCategoryId: string;
    ItemCategoryName: string;
    EquipmentId: string;
    EquipmentName: string;
    EntryDate: Date;
    ProductionId: string;
    UnitPrice: number;
    Quantity: number;
    TotalAmount: number;
    UpdatedDateTime: Date;
    ExecutorId: string;


    constructor() {
        this.Id = '';
        this.FactoryId = '';
        this.StaffId = '';
        this.StaffName = '';
        this.ItemId = '';
        this.ItemName = '';
        this.ItemCategoryId = '';
        this.ItemCategoryName = '';
        this.EquipmentId = '';
        this.EquipmentName = '';
        this.EntryDate = new Date();
        this.ProductionId = '';
        this.UnitPrice = 0;
        this.Quantity = 0;
        this.TotalAmount = 0;
        this.UpdatedDateTime = new Date();
        this.ExecutorId = '';
        this.ItemStatusId = '';
        this.ItemStatusName = '';
    }
}