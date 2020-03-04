export class ItemVM {
    Name: string;
    CategoryId: string;
    CategoryName: string;
    UnitPrice: number | null;
    FactoryId: string;
    Id: string;

    constructor() {
        this.FactoryId = '';
        this.CategoryId = '';
        this.Id = '';
        this.Name = '';
        this.UnitPrice = 0;
        this.CategoryName = '';
    }
}