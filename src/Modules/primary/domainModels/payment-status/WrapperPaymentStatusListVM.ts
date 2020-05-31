import { PaymentStatusVM } from './PaymentStatusVM';

export class WrapperPaymentStatusListVM
{
    TotalRecords: number;
    ListOfData: PaymentStatusVM[];
    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}