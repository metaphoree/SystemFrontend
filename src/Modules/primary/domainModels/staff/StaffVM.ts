export class StaffVM {
    Name: string;
    Email: string;
    ImageUrl: string;

    PermanentAddress: string;
    PresentAddress: string;

    UserName: string;
    Password: string;
    RoleId: string;
    IsManager: boolean;

    CellNo: string;
    AlternateCellNo: string;
    Role: string;

    FactoryId: string;
    Id: string;
    constructor() {
        this.Name = '';
        this.ImageUrl = '';
        this.Email = '';
        this.PermanentAddress = '';
        this.PresentAddress = '';
        this.CellNo = '';
        this.AlternateCellNo = '';
        this.Id = '';
        this.FactoryId = '';
        this.IsManager = false;
    }
}