import { SupplierVM } from './SupplierVM';

export class WrapperSupplierListVM {
    TotalRecoreds: number;
    ListOfData: SupplierVM[];
    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}