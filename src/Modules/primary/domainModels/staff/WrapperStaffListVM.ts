import { StaffVM } from './StaffVM';

export class WrapperStaffListVM {
    TotalRecords: number;
    ListOfData: StaffVM[];
    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}