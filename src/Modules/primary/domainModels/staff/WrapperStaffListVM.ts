import { StaffVM } from './StaffVM';

export class WrapperStaffListVM {
    TotalRecoreds: number;
    ListOfData: StaffVM[];
    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}