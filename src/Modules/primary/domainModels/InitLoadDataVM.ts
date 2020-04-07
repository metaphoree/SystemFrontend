import { ItemVM } from './item/ItemVM';
import { ItemCategoryVM } from './ItemCategory/ItemCategoryVM';
import { CustomerVM } from './CustomerVM';
import { SupplierVM } from './supplier/SupplierVM';
import { ExpenseTypeVM } from './expense-type/ExpenseTypeVM';
import { IncomeTypeVM } from './income-type/IncomeTypeVM';
import { InvoiceTypeVM } from './invoice-type/InvoiceTypeVM';
import { ItemStatusVM } from './item-status/ItemStatusVM';


export class InitialLoadDataVM {
    ItemVMs: ItemVM[];
    ItemCategoryVMs: ItemCategoryVM[];
    CustomerVMs: CustomerVM[];
    SupplierVMs: SupplierVM[];
    ExpenseTypeVMs: ExpenseTypeVM[];
    IncomeTypeVMs: IncomeTypeVM[];
    InvoiceTypeVMs: InvoiceTypeVM[];
    ItemStatusVMs: ItemStatusVM[];
    constructor() {
        this.ItemCategoryVMs = [];
        this.ItemVMs = [];
        this.CustomerVMs = [];
        this.SupplierVMs = [];
        this.ExpenseTypeVMs = [];
        this.IncomeTypeVMs = [];
        this.InvoiceTypeVMs = [];
        this.ItemStatusVMs = [];
    }
}