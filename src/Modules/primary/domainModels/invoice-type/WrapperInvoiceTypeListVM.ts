import { InvoiceTypeVM } from './InvoiceTypeVM';

export class WrapperInvoiceTypeListVM {
    TotalRecords: number;
    ListOfData: InvoiceTypeVM[];

    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}