import { ItemCategoryVM } from './ItemCategoryVM';
export class WrapperItemCategoryListVM {
    TotalRecords: number;
    ListOfData: ItemCategoryVM[];

    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}