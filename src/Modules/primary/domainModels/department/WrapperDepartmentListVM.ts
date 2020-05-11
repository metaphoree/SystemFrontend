import { DepartmentVM } from './DepartmentVM';

export class WrapperDepartmentListVM {
    TotalRecords: number;
    ListOfData: DepartmentVM[];

    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}