import { RoleVM } from './RoleVM';

export class WrapperRoleListVM
{
    TotalRecords: number;
    ListOfData: RoleVM[];


    constructor(){

        this.TotalRecords = 0;
        this.ListOfData = [];
    }
}