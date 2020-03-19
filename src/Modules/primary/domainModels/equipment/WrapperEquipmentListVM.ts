import { EquipmentVM } from './EquipmentVM';

export class WrapperEquipmentListVM {
    TotalRecoreds: number;
    ListOfData: EquipmentVM[];

    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}