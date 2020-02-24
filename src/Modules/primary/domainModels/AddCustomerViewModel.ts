export class AddCustomerViewModel {
    Name: string;
    Email: string;

    PermanentAddress: string;
    PresentAddress: string;

    CellNo: string;
    AlternateCellNo: string;
    FactoryId: string;

    constructor(Name: string,
                Email: string,
                PermanentAddress: string,
                PresentAddress: string,
                CellNo: string,
                AlternateCellNo: string,
                FactoryId: string) {
        this.AlternateCellNo = AlternateCellNo;
        this.CellNo = CellNo;
        this.Email = Email;
        this.Name = Name;
        this.PermanentAddress = PermanentAddress;
        this.PresentAddress = PresentAddress;
        this.FactoryId = FactoryId;
    }
}
