import { AddProductionVM } from './AddProductionVM';

export class WrapperProductionListVM
{
    TotalRecoreds: number;
    ListOfData: AddProductionVM[];
    constructor(){
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}