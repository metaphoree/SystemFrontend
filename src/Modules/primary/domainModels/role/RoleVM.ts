export class RoleVM
{
   
    Id: string;
    FactoryId: string;
    Name: string;

    Item: boolean;
    ItemCategory: boolean;
    Equipment: boolean;
    EquipmentCategory: boolean;
    Stock: boolean;
    PurchaseReturn: boolean;
    SalesReturn: boolean;
    Staff: boolean;
    Customer: boolean;
    Supplier: boolean;
    StaffHistory: boolean;
    Production: boolean;
    CustomerHistory: boolean;
    SupplierHistory: boolean;
    MonthlyIncomeReport: boolean;
    MonthlyExpenseReport: boolean;
    MonthlyPayableReport: boolean;
    MonthlyRecievableReport: boolean;
    MonthlyAccountReport: boolean;
    MonthlyProductionReport: boolean;
    StaffPayment: boolean;
    CustomerPayment: boolean;
    SupplierPayment: boolean;
    Department: boolean;
    Sales: boolean;
    Purchase: boolean;
    Income: boolean;
    Expense: boolean;
    IncomeType: boolean;
    ExpenseType: boolean;
    InvoiceType: boolean;
    ItemStatus: boolean;
    PaymentStatus: boolean;
    Factory: boolean;
    Registration: boolean;

    constructor(){
        this.Id= '';
        this.FactoryId= '';
        this.Name= '';
        this.Item= false;
        this.ItemCategory= false;
        this.Equipment= false;
        this.EquipmentCategory= false;
        this.Stock= false;
        this.PurchaseReturn= false;
        this.SalesReturn= false;
        this.Staff= false;
        this.Customer= false;
        this.Supplier= false;
        this.StaffHistory= false;
        this.Production= false;
        this.CustomerHistory= false;
        this.SupplierHistory= false;
        this.MonthlyIncomeReport= false;
        this.MonthlyExpenseReport= false;
        this.MonthlyPayableReport= false;
        this.MonthlyRecievableReport= false;
        this.MonthlyAccountReport= false;
        this.MonthlyProductionReport= false;
        this.StaffPayment= false;
        this.CustomerPayment= false;
        this.SupplierPayment= false;
        this.Department= false;
        this.Sales= false;
        this.Purchase= false;
        this.Income= false;
        this.Expense= false;
        this.IncomeType= false;
        this.ExpenseType= false;
        this.InvoiceType= false;
        this.ItemStatus= false;
        this.PaymentStatus= false;
        this.Factory= false;
        this.Registration= false;



    }
}