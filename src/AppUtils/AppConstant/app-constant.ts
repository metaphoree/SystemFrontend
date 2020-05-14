export class AppConstant {
   // static BASE_URL = 'https://localhost:44355/';
   static BASE_URL = 'http://localhost:63048/';
}
export enum DB_OPERATION {
   CREATE,
   UPDATE,
   DELETE,
   READ,
   OTHER,
   PURCHASE_RETURN
}


export enum ExpenseType {
  Purchase,
  StaffPayment,
  SupplierPayment,
  SalesReturn
}
export enum IncomeType {
  Sales,
  ClientPaymentRecieved,
  PurchaseReturn
}
export enum InvoiceType {
  Sales,
  Purchase,
  ClientPayment,
  SupplierPayment,
  StaffPayment,
  StaffProduction,
  SalesReturn,
  PurchaseReturn,
  Expense,
  Income
}
export enum StatusItem
{
    GOOD,
    BAD,
    DEFECTED
}