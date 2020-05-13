import { SalesVM } from './SalesVM';

export class WrapperSalesListVM {
    TotalRecords: number;
    ListOfData: SalesVM[];
    stringRepresentation: string;
    constructor() {
        this.TotalRecords = 0;
        this.ListOfData = [];
        this.stringRepresentation = '';
    }
}