import { PurchaseVM } from './PurchaseVM';

export class WrapperPurchaseListVM {
    TotalRecoreds: number;
    ListOfData: PurchaseVM[];

    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];

    }
}