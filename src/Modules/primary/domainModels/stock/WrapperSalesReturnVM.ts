import { SalesReturnVM } from './SalesReturnVM';

export class WrapperSalesReturnVM
{
    
    ListOfData: SalesReturnVM[];
    TotalRecords: number;

 constructor(){

    this.ListOfData = [];
    this.TotalRecords = 0;
 }

}