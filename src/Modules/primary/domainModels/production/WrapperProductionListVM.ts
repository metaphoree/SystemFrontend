import { AddProductionVM } from './AddProductionVM';

export class WrapperProductionListVM
{
    TotalRecords: number;
    ListOfData: AddProductionVM[];
    constructor(){
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}