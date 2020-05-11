import { StaffHistory } from './StaffHistory';

export class WrapperStaffHistory
{
    TotalRecords: number;
    ListOfData: StaffHistory[];

    constructor(){
        this.ListOfData = [];

    }
}