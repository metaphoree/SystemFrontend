import { ItemVM } from './ItemVM';

export class WrapperItemListVM {
    TotalRecoreds: number;
    ListOfData: ItemVM[];

    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}