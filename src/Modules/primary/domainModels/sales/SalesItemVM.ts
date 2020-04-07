import { ItemVM } from '../item/ItemVM';
import { ItemCategoryVM } from '../ItemCategory/ItemCategoryVM';
import { ItemStatusVM } from '../item-status/ItemStatusVM';
import { CustomerVM } from '../CustomerVM';

export class SalesItemVM
{
    Item: ItemVM;
    ItemStatus : ItemStatusVM;
    ItemCategory: ItemCategoryVM;
    Quantity: number;
    UnitPrice: number;

    FactoryId: string;
    ExpiryDate: Date;
    CustomerVM: CustomerVM;
    EmployeeId: string;
    InvoiceId: string;


 constructor(){
    this.Item = new ItemVM();
    this.ItemCategory  = new ItemCategoryVM();
    this.ItemStatus = new ItemStatusVM();
    this.Quantity  = 0;
    this.UnitPrice = 0;
    this.FactoryId = '';
    this.ExpiryDate = new Date();
    this.CustomerVM = new CustomerVM();
    this.EmployeeId = '';
    this.InvoiceId = '';
 }
}