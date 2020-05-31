import { SupplierVM } from '../supplier/SupplierVM';
import { PurchaseItemVM } from './PurchaseItemVM';
import { InvoiceTypeVM } from '../invoice-type/InvoiceTypeVM';
import { ExpenseTypeVM } from '../expense-type/ExpenseTypeVM';

export class PurchaseVM {
    SupplierVM: SupplierVM;

    InvoiceType: InvoiceTypeVM;
    ExpenseType: ExpenseTypeVM;
    OcurranceDate: Date;
    TotalAmount: number;
    PaidAmount: number;
    DueAmount: number;
    DiscountAmount: number;
    ItemList: PurchaseItemVM[];

    EmployeeId: string;
    FactoryId: string;
    InvoiceId: string;
SupplierName : string;

  stringVersion : string;








    constructor() {
        this.stringVersion = '';
        this.SupplierVM = new SupplierVM();
        this.OcurranceDate = new Date();
        this.TotalAmount = 0;
        this.PaidAmount = 0;
        this.DueAmount = 0;
        this.DiscountAmount = 0;
        this.ItemList  = [];
        this.InvoiceType = new InvoiceTypeVM();
        this.ExpenseType = new ExpenseTypeVM()
        this.EmployeeId  = '';
        this.FactoryId  = '';
        this.InvoiceId  = '';
        this.SupplierName = '';
    }
}