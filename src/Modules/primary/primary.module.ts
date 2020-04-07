import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryRoutingModule } from './primary-routing.module';


import { ViewComponentsModule } from '../view-components/view-components.module';

import { BrowserModule } from '@angular/platform-browser';

import { ItemManagementComponent } from './Components/Item/item-management/item-management.component';
import { AddItemComponent } from './Components/Item/add-item/add-item.component';
import { EditItemComponent } from './Components/Item/edit-item/edit-item.component';
import { ItemCategoryManagementComponent } from './Components/item-category/item-category-management/item-category-management.component';
import { AddItemCategoryComponent } from './Components/item-category/add-item-category/add-item-category.component';
import { EditItemCategoryComponent } from './Components/item-category/edit-item-category/edit-item-category.component';
import { AddStaffComponent } from './Components/staff/add-staff/add-staff.component';
import { EditStaffComponent } from './Components/staff/edit-staff/edit-staff.component';
import { StaffMgmtComponent } from './Components/staff/staff-mgmt/staff-mgmt.component';
import { AddStockComponent } from './Components/stock/add-stock/add-stock.component';
import { EditStockComponent } from './Components/stock/edit-stock/edit-stock.component';
import { StockMgmtComponent } from './Components/stock/stock-mgmt/stock-mgmt.component';
import { SupplierMgmtComponent } from './Components/supplier/supplier-mgmt/supplier-mgmt.component';
import { AddSupplierComponent } from './Components/supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './Components/supplier/edit-supplier/edit-supplier.component';
import { PurchaseHomeComponent } from './Components/purchase/purchase-home/purchase-home.component';
import { PurchaseProductComponent } from './Components/purchase/purchase-product/purchase-product.component';
import { SalesHomeComponent } from './Components/sales/sales-home/sales-home.component';
import { SaleProductComponent } from './Components/sales/sale-product/sale-product.component';

import { DepartmentMgmtComponent } from './Components/department/department-mgmt/department-mgmt.component';
import { EquipmentMgmtComponent } from './Components/equipment/equipment-mgmt/equipment-mgmt.component';
import { EquipmentCategoryMgmtComponent } from './Components/equipment-category/equipment-category-mgmt/equipment-category-mgmt.component';
import { IncomeTypeMgmtComponent } from './Components/income-type/income-type-mgmt/income-type-mgmt.component';

import { InvoiceTypeMgmtComponent } from './Components/invoice-type/invoice-type-mgmt/invoice-type-mgmt.component';
import { ExpenseTypeMgmtComponent } from './Components/expense-type/expense-type-mgmt/expense-type-mgmt.component';

import { AddExpenseTypeComponent } from './Components/expense-type/add-expense-type/add-expense-type.component';
import { EditExpenseTypeComponent } from './Components/expense-type/edit-expense-type/edit-expense-type.component';
import { EditDepartmentComponent } from './Components/department/edit-department/edit-department.component';
import { AddDepartmentComponent } from './Components/department/add-department/add-department.component';
import { AddIncomeTypeComponent } from './Components/income-type/add-income-type/add-income-type.component';
import { EditIncomeTypeComponent } from './Components/income-type/edit-income-type/edit-income-type.component';
import { EditInvoiceTypeComponent } from './Components/invoice-type/edit-invoice-type/edit-invoice-type.component';
import { AddInvoiceTypeComponent } from './Components/invoice-type/add-invoice-type/add-invoice-type.component';
import { AddEquipmentComponent } from './Components/equipment/add-equipment/add-equipment.component';
import { EditEquipmentComponent } from './Components/equipment/edit-equipment/edit-equipment.component';
import { EditEquipmentCategoryComponent } from './Components/equipment-category/edit-equipment-category/edit-equipment-category.component';
import { AddEquipmentCategoryComponent } from './Components/equipment-category/add-equipment-category/add-equipment-category.component';

import {EditCustomerComponent} from  './Components/customer/edit-customer/edit-customer.component';
import {AddCustomerComponent} from  './Components/customer/add-customer/add-customer.component'; 
import {ClientManagementComponent} from  './Components/customer/client-management/client-management.component';
import {ClientManagementHomeComponent} from  './Components/customer/client-management-home/client-management-home.component';
import { CustomerPaymentComponent } from './Components/customer/customer-payment/customer-payment.component';
import { SupplierPaymentComponent } from './Components/supplier/supplier-payment/supplier-payment.component';
import { StaffPaymentComponent } from './Components/staff/staff-payment/staff-payment.component';

@NgModule({
  declarations: [ ClientManagementComponent, ClientManagementHomeComponent, EditCustomerComponent, AddCustomerComponent,
     ItemManagementComponent, AddItemComponent, EditItemComponent, ItemCategoryManagementComponent, AddItemCategoryComponent,
      EditItemCategoryComponent, AddStaffComponent, EditStaffComponent, StaffMgmtComponent, AddStockComponent, EditStockComponent, 
      StockMgmtComponent, SupplierMgmtComponent, AddSupplierComponent, EditSupplierComponent, PurchaseHomeComponent, 
      PurchaseProductComponent, SalesHomeComponent, SaleProductComponent, DepartmentMgmtComponent, EquipmentMgmtComponent,
        EquipmentCategoryMgmtComponent, IncomeTypeMgmtComponent,
      InvoiceTypeMgmtComponent, ExpenseTypeMgmtComponent, AddExpenseTypeComponent, EditExpenseTypeComponent, EditDepartmentComponent, 
      AddDepartmentComponent, AddIncomeTypeComponent, EditIncomeTypeComponent, EditInvoiceTypeComponent, AddInvoiceTypeComponent, 
      AddEquipmentComponent, EditEquipmentComponent, EditEquipmentCategoryComponent, AddEquipmentCategoryComponent,
    SalesHomeComponent,SaleProductComponent, CustomerPaymentComponent, SupplierPaymentComponent, StaffPaymentComponent],
  imports: [
    CommonModule,
    BrowserModule,
    PrimaryRoutingModule,
    ViewComponentsModule
  ],
  entryComponents: [ EditCustomerComponent,AddCustomerComponent,AddItemComponent,EditItemComponent]
})
export class PrimaryModule { }
