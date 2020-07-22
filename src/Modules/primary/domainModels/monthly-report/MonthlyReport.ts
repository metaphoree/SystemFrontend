import { GetDataListVM } from '../GetDataListVM';

export class MonthlyReport extends GetDataListVM {
    Month: string;
    From: Date;
    To: Date;
    constructor() {
        super();
        this.From = new Date(new Date().getFullYear(),new Date().getMonth()-1,new Date().getUTCDay());
        this.To = new Date();
    }
}