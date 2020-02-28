import { ItemCategoryVM } from './ItemCategoryVM';
export class WrapperItemCategoryListVM {
    TotalRecoreds: number;
    ListOfData: ItemCategoryVM[];

    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}