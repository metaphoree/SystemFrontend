import { CustomerVM } from './CustomerVM';

export class WrapperListCustomerVM {
    TotalRecords: number;
    ListOfData: CustomerVM[];
    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}