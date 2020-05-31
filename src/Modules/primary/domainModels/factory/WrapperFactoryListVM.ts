import { FactoryVM } from './FactoryVM';

export class WrapperFactoryListVM
{
    TotalRecords: number;
    ListOfData: FactoryVM[];
    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}