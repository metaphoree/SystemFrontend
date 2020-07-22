import { SalesVM } from './SalesVM';
import { CommonVM } from '../CommonVM';

export class WrapperSalesListVM  extends CommonVM {
    TotalRecords: number;
    ListOfData: SalesVM[];
    stringRepresentation: string;
    constructor() {
        super();
        this.TotalRecords = 0;
        this.ListOfData = [];
        this.stringRepresentation = '';
    }
}