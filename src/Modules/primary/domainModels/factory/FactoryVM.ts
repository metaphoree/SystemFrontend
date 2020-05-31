export class FactoryVM {
    CreatedDateTime: Date;
    UpdatedDateTime: Date;
    Id: string;
    FactoryId: string;
    SubscriptionStart: Date;
    SubscriptionEnd: Date;
    LicenseNo: string;
    RegNo: string;
    VatRegNo: string;
    Name: string;
    ImageUrl: string;













    constructor() {
        this.CreatedDateTime = new Date();
        this.UpdatedDateTime = new Date();
        this.Id = '';
        this.FactoryId = '';
        this.SubscriptionStart = new Date();
        this.SubscriptionEnd = new Date();
        this.LicenseNo = '';
        this.RegNo = '';
        this.VatRegNo = '';
        this.Name = '';
        this.ImageUrl = '';



    }

}