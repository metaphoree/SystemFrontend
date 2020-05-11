import { SupplierVM } from './SupplierVM';

export class WrapperSupplierListVM {
    TotalRecords: number;
    ListOfData: SupplierVM[];
    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}