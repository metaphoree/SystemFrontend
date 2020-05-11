import { PurchaseVM } from './PurchaseVM';

export class WrapperPurchaseListVM {
    TotalRecords: number;
    ListOfData: PurchaseVM[];

    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];

    }
}