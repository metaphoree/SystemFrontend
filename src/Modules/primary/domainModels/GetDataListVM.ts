    export class GetDataListVM
    {
       PageSize: number;
       PageNumber: number;
       TotalRows: number;
        FactoryId: string;
        GlobalFilter: string;


	constructor() {
		this.PageSize = 0;
		this.PageNumber = 0;
		this.TotalRows = 0;
        this.FactoryId = '';
        this.GlobalFilter = '';
	}
    }