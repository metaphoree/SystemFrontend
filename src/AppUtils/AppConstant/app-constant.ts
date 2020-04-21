export class AppConstant {
   // static BASE_URL = 'https://localhost:44355/';
   static BASE_URL = 'http://localhost:63048/';
}
export enum DB_OPERATION {
   CREATE,
   UPDATE,
   DELETE,
   READ
}


export enum ExpenseType {
  Purchase,
  StaffPayment,
  SupplierPayment
}
export enum IncomeType {
  Sales,
  ClientPaymentRecieved
}
export enum InvoiceType {
  Sales,
  Purchase,
  ClientPayment,
  SupplierPayment,
  StaffPayment,
  StaffProduction,
  SalesReturn,
  PurchaseReturn
}
export enum StatusItem
{
    GOOD,
    BAD,
    DEFECTED
}