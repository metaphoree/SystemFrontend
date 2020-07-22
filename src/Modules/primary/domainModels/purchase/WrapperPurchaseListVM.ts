import { PurchaseVM } from './PurchaseVM';
import { CommonVM } from '../CommonVM';

export class WrapperPurchaseListVM extends CommonVM {
    TotalRecords: number;
    ListOfData: PurchaseVM[];

    constructor() {
        super();
        this.TotalRecords = 0;
        this.ListOfData = [];

    }
}