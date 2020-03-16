export class StockVM
{
    ItemId: string;
    ItemName: string;
    Quantity: number | null;
    ItemStatus: string;
    ItemStatusId: string;
    ExpiryDate: Date;

    FactoryId: string;
    Id: string;


constructor(){

    this.ItemId = ''; 
    this.ItemName= '';
    this.Quantity= 0;
    this.ItemStatus= '';
    this.ItemStatusId= '';
    this.ExpiryDate= new Date();
    this.FactoryId= '';
    this.Id= '';
}

}