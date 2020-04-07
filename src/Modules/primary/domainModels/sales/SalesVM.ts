import { CustomerVM } from '../CustomerVM';
import { SalesItemVM } from './SalesItemVM';
import { InvoiceTypeVM } from '../invoice-type/InvoiceTypeVM';
import { IncomeTypeVM } from '../income-type/IncomeTypeVM';

export class SalesVM {
    CustomerVM: CustomerVM;
    InvoiceType : InvoiceTypeVM;
    IncomeType : IncomeTypeVM;
    OcurranceDate: Date;
    TotalAmount: number;
    PaidAmount: number;
    DueAmount: number;
    DiscountAmount: number;
    ItemList: SalesItemVM[];

    EmployeeId : string; 
    FactoryId : string; 
    InvoiceId : string; 

    constructor() {
        this.CustomerVM = new CustomerVM();
        this.OcurranceDate = new Date();
        this.InvoiceType = new InvoiceTypeVM();
        this.IncomeType = new IncomeTypeVM();
        this.TotalAmount = 0;
        this.PaidAmount = 0;
        this.DueAmount = 0;
        this.DiscountAmount = 0;
        this.ItemList = [];
        this.EmployeeId = '';
        this.FactoryId  = '';
        this.InvoiceId  = '';
    
    
    }
}