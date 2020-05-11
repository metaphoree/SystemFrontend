import { ItemStatusVM } from './ItemStatusVM';

export class WrapperItemStatusListVM {
    TotalRecords: number;
    ListOfData: ItemStatusVM[];

    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}