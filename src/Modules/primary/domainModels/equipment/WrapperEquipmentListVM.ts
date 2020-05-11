import { EquipmentVM } from './EquipmentVM';

export class WrapperEquipmentListVM {
    TotalRecords: number;
    ListOfData: EquipmentVM[];

    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}