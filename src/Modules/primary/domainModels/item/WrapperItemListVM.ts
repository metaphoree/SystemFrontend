import { ItemVM } from './ItemVM';

export class WrapperItemListVM {
    TotalRecords: number;
    ListOfData: ItemVM[];

    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}