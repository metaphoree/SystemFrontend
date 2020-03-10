export class CustomerVM {
    Name: string;
    ImageUrl: string;
    Email: string;

    PermanentAddress: string;
    PresentAddress: string;

    CellNo: string;
    AlternateCellNo: string;


    CustomerId: string;
    FactoryId: string;

    constructor() {
        this.Name = '';
        this.ImageUrl= '';
        this.Email= '';
        this.PermanentAddress= '';
        this.PresentAddress= '';
        this.CellNo= '';
        this.AlternateCellNo= '';
        this.CustomerId= '';
        this.FactoryId= '';
    }
}
