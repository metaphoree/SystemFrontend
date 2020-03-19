import { EquipmentCategoryVM } from './EquipmentCategoryVM';

export class WrapperEquipmentCategoryListVM {
    TotalRecoreds: number;
    ListOfData: EquipmentCategoryVM[];

    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}