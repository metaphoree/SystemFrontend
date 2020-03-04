import { ListCustomerVM } from './ListCustomerVM';

export class WrapperListCustomerVM {
    TotalRecoreds: number;
    CustomerList: ListCustomerVM[];
    constructor(TotalRecoreds: number,
        CustomerList: ListCustomerVM[]) {
        this.TotalRecoreds = 0;
        this.CustomerList = [];
    }
}