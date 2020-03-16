import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryRoutingModule } from './primary-routing.module';
import { SalesComponent } from './Components/sales/sales.component';
import { ClientManagementComponent } from './Components/client-management/client-management.component';
import { ViewComponentsModule } from '../view-components/view-components.module';
import { ClientManagementHomeComponent } from './Components/client-management-home/client-management-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { EditCustomerComponent } from './Components/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
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


@NgModule({
  declarations: [SalesComponent, ClientManagementComponent, ClientManagementHomeComponent, EditCustomerComponent, AddCustomerComponent, ItemManagementComponent, AddItemComponent, EditItemComponent, ItemCategoryManagementComponent, AddItemCategoryComponent, EditItemCategoryComponent, AddStaffComponent, EditStaffComponent, StaffMgmtComponent, AddStockComponent, EditStockComponent, StockMgmtComponent, SupplierMgmtComponent, AddSupplierComponent, EditSupplierComponent],
  imports: [
    CommonModule,
    BrowserModule,
    PrimaryRoutingModule,
    ViewComponentsModule
  ],
  entryComponents: [ EditCustomerComponent,AddCustomerComponent,AddItemComponent,EditItemComponent]
})
export class PrimaryModule { }
