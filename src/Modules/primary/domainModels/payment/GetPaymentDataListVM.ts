import {GetDataListVM} from './../GetDataListVM';

export class GetPaymentDataListVM extends GetDataListVM
{
    ClientId: string;
    constructor(){
        super();
        this.ClientId = '';
    }
}