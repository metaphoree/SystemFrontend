import { CustomerVM } from './CustomerVM';

export class WrapperListCustomerVM {
    TotalRecoreds: number;
    ListOfData: CustomerVM[];
    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}