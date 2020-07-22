export class ApiUrl {
    static SetCustomer = 'api/hr/Customer/add';
    static GetCustomer = 'api/hr/Customer/getAll';
    static GetCustomerById = 'api/hr/Customer/getById';
    static UpdateCustomer = 'api/hr/Customer/update';
    static DeleteCustomer = 'api/hr/Customer/delete';

    static SetStaff = 'api/hr/Staff/add';
    static GetStaff = 'api/hr/Staff/getAll';
    static GetStaffById = 'api/hr/Staff/getById';
    static UpdateStaff = 'api/hr/Staff/update';
    static DeleteStaff = 'api/hr/Staff/delete';
    static AddStaffAsItAdmin = 'api/hr/Staff/addToAdmin';
    

    static SetSupplier = 'api/hr/Supplier/add';
    static GetSupplier = 'api/hr/Supplier/getAll';
    static GetSupplierById = 'api/hr/Supplier/getById';
    static UpdateSupplier = 'api/hr/Supplier/update';
    static DeleteSupplier = 'api/hr/Supplier/delete';

    static SetStock = 'api/stock/add';
    static GetStock = 'api/stock/getAll';
    static GetStockById = 'api/stock/getById';
    static UpdateStock = 'api/stock/update';
    static DeleteStock = 'api/stock/delete';

    static SetItem = 'api/Item/add';
    static GetItem = 'api/Item/getAll';
    static GetItemById = 'api/Item/getById';
    static UpdateItem = 'api/Item/update';
    static DeleteItem = 'api/Item/delete';

    static GetItemStatus = 'api/Item/status/getAll';
    static SetItemStatus = 'api/Item/status/add';
    static DeleteItemStatus = 'api/Item/status/delete';
    static UpdateItemStatus = 'api/Item/status/update';

    static SetItemCategory = 'api/ItemCategory/add';
    static GetItemCategory = 'api/ItemCategory/getAll';
    static GetItemCategoryById = 'api/ItemCategory/getById';
    static UpdateItemCategory = 'api/ItemCategory/update';
    static DeleteItemCategory = 'api/ItemCategory/delete';

    static SetExpenseType = 'api/ExpenseType/add';
    static GetExpenseType = 'api/ExpenseType/getAll';
    static GetExpenseTypeById = 'api/ExpenseType/getById';
    static UpdateExpenseType = 'api/ExpenseType/update';
    static DeleteExpenseType = 'api/ExpenseType/delete';

    static SetIncomeType = 'api/IncomeType/add';
    static GetIncomeType = 'api/IncomeType/getAll';
    static GetIncomeTypeById = 'api/IncomeType/getById';
    static UpdateIncomeType = 'api/IncomeType/update';
    static DeleteIncomeType = 'api/IncomeType/delete';

    static SetInvoiceType = 'api/InvoiceType/add';
    static GetInvoiceType = 'api/InvoiceType/getAll';
    static GetInvoiceTypeById = 'api/InvoiceType/getById';
    static UpdateInvoiceType = 'api/InvoiceType/update';
    static DeleteInvoiceType = 'api/InvoiceType/delete';

    static SetEquipment = 'api/Equipment/add';
    static GetEquipment = 'api/Equipment/getAll';
    static GetEquipmentById = 'api/Equipment/getById';
    static UpdateEquipment = 'api/Equipment/update';
    static DeleteEquipment = 'api/Equipment/delete';

    static SetEquipmentCategory = 'api/EquipmentCategory/add';
    static GetEquipmentCategory = 'api/EquipmentCategory/getAll';
    static GetEquipmentCategoryById = 'api/EquipmentCategory/getById';
    static UpdateEquipmentCategory = 'api/EquipmentCategory/update';
    static DeleteEquipmentCategory = 'api/EquipmentCategory/delete';

    static SetDepartment = 'api/Department/add';
    static GetDepartment = 'api/Department/getAll';
    static GetDepartmentById = 'api/Department/getById';
    static UpdateDepartment = 'api/Department/update';
    static DeleteDepartment = 'api/Department/delete';

    static GetPurchaseInitData = 'api/business/purchase/getInitData';
    static AddPurchase = 'api/business/purchase/add';
    static DeletePurchase = 'api/business/purchase/delete';

    static DeleteSales = 'api/business/sales/delete';
    static GetSalesInitData = 'api/business/sales/getInitData';
    static AddSales = 'api/business/sales/add';

    static PaymentInitialData = 'api/business/pay/init_data';

    static RecieveCashFromCustomer = 'api/business/customer/payment';
    static CustomerPaymentList = 'api/business/customer/payment/list';
    static DeleteCustomerPayment = 'api/business/customer/payment/delete';

    static GiveSupplierPayment = 'api/business/supplier/payment';
    static SupplierPaymentList = 'api/business/supplier/payment/list';
    static DeleteSupplierPayment = 'api/business/supplier/payment/delete';

    static GiveStaffPayment = 'api/business/staff/payment';
    static StaffPaymentList = 'api/business/staff/payment/list';
    static DeleteStaffPayment = 'api/business/staff/payment/delete';

    static SetProduction = 'api/Production/add';
    static GetProduction = 'api/Production/getAll';
    static GetProductionById = 'api/Production/getById';
    static UpdateProduction = 'api/Production/update';
    static DeleteProduction = 'api/Production/delete';

    static GetCustomerHistory = 'api/business/customer/history';
    static GetStaffHistory = 'api/business/staff/history';
    static GetSupplierHistory = 'api/business/supplier/history';

    static GetProductionInitData = 'api/business/production/getInitData';

    static GetAllPurchaseInvoice = 'api/business/purchase/getAll';
    static GetAllSalesInvoice = 'api/business/sales/getAll';

    static SetPurchaseReturn = 'api/business/purchase/return/add';
    static GetPurchaseReturn = 'api/business/purchase/return/getAll';
    static DeletePurchaseReturn = 'api/business/purchase/return/delete';

    static SetSalesReturn = 'api/business/sales/return/add';
    static GetSalesReturn = 'api/business/sales/return/getAll';
    static DeleteSalesReturn = 'api/business/sales/return/delete';

    static MonthlyProduction = 'api/business/report/monthly/production';
    static MonthlyIncome = 'api/business/report/monthly/income';
    static MonthlyExpense = 'api/business/report/monthly/expense';
    static MonthlyPayable = 'api/business/report/monthly/payable';
    static MonthlyRecievable = 'api/business/report/monthly/recievable';
    static MonthlyTransaction = 'api/business/report/monthly/transaction'

    static ChangeItemStatus = 'api/business/item/status/change';

    static SetIncome = 'api/Income/add';
    static GetIncome = 'api/Income/getAll';
    static GetIncomeById = 'api/Income/getById';
    static UpdateIncome = 'api/Income/update';
    static DeleteIncome = 'api/Income/delete';

    static SetExpense = 'api/Expense/add';
    static GetExpense = 'api/Expense/getAll';
    static GetExpenseById = 'api/Expense/getById';
    static UpdateExpense = 'api/Expense/update';
    static DeleteExpense = 'api/Expense/delete';

    static GetPaymentStatus = 'api/payment/status/getAll';
    static SetPaymentStatus = 'api/payment/status/add';
    static DeletePaymentStatus = 'api/payment/status/delete';
    static UpdatePaymentStatus = 'api/payment/status/update';

    static GetFactory = 'api/factory/getAll';
    static SetFactory = 'api/factory/add';
    static DeleteFactory = 'api/factory/delete';
    static UpdateFactory = 'api/factory/update';

    static GetRole = 'api/auth/Role/getAll';
    static SetRole = 'api/auth/Role/add';
    static DeleteRole = 'api/auth/Role/delete';
    static UpdateRole = 'api/auth/Role/update';

    static GetUserAuthInfo = 'api/auth/UserAuthInfo/getAll';
    static SetUserAuthInfo = 'api/auth/UserAuthInfo/add';
    static DeleteUserAuthInfo = 'api/auth/UserAuthInfo/delete';
    static UpdateUserAuthInfo = 'api/auth/UserAuthInfo/update';

    static Login = 'api/auth/login';
    static UserNameExist = 'api/auth/userNameExist';
    static StaffInitData = 'api/business/staff/getInitData';

    static GetRoleByUserId = 'api/auth/Role/getByUserId'
}

