export class SupplierVM
{
    Name: string;
    Email: string;
    ImageUrl: string;

    PermanentAddress: string;
    PresentAddress: string;

    CellNo: string;
    AlternateCellNo: string;


    FactoryId: string;
    Id: string;
    constructor() {
        this.Name = '';
        this.ImageUrl= '';
        this.Email= '';
        this.PermanentAddress= '';
        this.PresentAddress= '';
        this.CellNo= '';
        this.AlternateCellNo= '';
        this.Id= '';
        this.FactoryId= '';
    }
}