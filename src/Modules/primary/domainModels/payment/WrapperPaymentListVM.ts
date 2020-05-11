import { PaymentVM } from './PaymentVM';

export class WrapperPaymentListVM
{
    ListOfData: PaymentVM[];
    TotalRecords : number;
    constructor(){
        this.ListOfData = [];
        this.TotalRecords = 0;
    }
}