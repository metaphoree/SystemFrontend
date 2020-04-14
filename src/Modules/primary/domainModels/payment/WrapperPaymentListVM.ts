import { PaymentVM } from './PaymentVM';

export class WrapperPaymentListVM
{
    ListOfData: PaymentVM[];
    TotalRecoreds : number;
    constructor(){
        this.ListOfData = [];
        this.TotalRecoreds = 0;
    }
}