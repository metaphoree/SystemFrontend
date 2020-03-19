import { InvoiceTypeVM } from './InvoiceTypeVM';

export class WrapperInvoiceTypeListVM {
    TotalRecoreds: number;
    ListOfData: InvoiceTypeVM[];

    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}