import { DepartmentVM } from './DepartmentVM';

export class WrapperDepartmentListVM {
    TotalRecoreds: number;
    ListOfData: DepartmentVM[];

    constructor() {
        this.TotalRecoreds = 0;
        this.ListOfData = [];
    }
}