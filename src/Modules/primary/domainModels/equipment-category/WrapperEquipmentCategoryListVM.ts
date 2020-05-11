import { EquipmentCategoryVM } from './EquipmentCategoryVM';

export class WrapperEquipmentCategoryListVM {
    TotalRecords: number;
    ListOfData: EquipmentCategoryVM[];

    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}