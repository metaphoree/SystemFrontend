import { ItemStatusVM } from './ItemStatusVM';

export class WrapperItemStatusListVM {
    TotalRecoreds: number;
    ListOfData: ItemStatusVM[];

    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}