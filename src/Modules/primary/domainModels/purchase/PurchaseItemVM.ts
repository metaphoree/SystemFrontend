import { ItemVM } from '../item/ItemVM';
import { ItemCategoryVM } from '../ItemCategory/ItemCategoryVM';
import { ItemStatusVM } from '../item-status/ItemStatusVM';
import { SupplierVM } from '../supplier/SupplierVM';

export class PurchaseItemVM {
    Item: ItemVM;
    ItemCategory: ItemCategoryVM;
    Quantity: number;
    UnitPrice: number;


    ItemStatus: ItemStatusVM;
    FactoryId: string;
    ExpiryDate: Date;
    SupplierVM: SupplierVM;
    EmployeeId: string;
    InvoiceId: string;


    ItemName: string;
    ItemCategoryName: string;
    Status: string;
    Month: string;
stringVersion : string;









    constructor() {
        this.Item = new ItemVM();
        this.ItemCategory = new ItemCategoryVM();
        this.Quantity = 0;
        this.UnitPrice = 0;

        this.ItemStatus = new ItemStatusVM();
        this.FactoryId = '';
        this.ExpiryDate = new Date();
        this.SupplierVM = new SupplierVM();
        this.EmployeeId = '';
        this.InvoiceId = '';


        this.ItemName = '';
        this.Status = '';
        this.ItemCategoryName = '';
        this.Month = '';





    }
}