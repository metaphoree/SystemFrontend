import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientManagementComponent } from './Components/client-management/client-management.component';
import { ClientManagementHomeComponent } from './Components/client-management-home/client-management-home.component';
import { ItemManagementComponent } from './Components/Item/item-management/item-management.component';
import { ItemCategoryManagementComponent } from './Components/item-category/item-category-management/item-category-management.component';
import { StaffMgmtComponent } from './Components/staff/staff-mgmt/staff-mgmt.component';
import { SupplierMgmtComponent } from './Components/supplier/supplier-mgmt/supplier-mgmt.component';
import { StockMgmtComponent } from './Components/stock/stock-mgmt/stock-mgmt.component';
import { InvoiceTypeMgmtComponent } from './Components/invoice-type/invoice-type-mgmt/invoice-type-mgmt.component';
import { ExpenseTypeMgmtComponent } from './Components/expense-type/expense-type-mgmt/expense-type-mgmt.component';
import { IncomeTypeMgmtComponent } from './Components/income-type/income-type-mgmt/income-type-mgmt.component';
import { EquipmentMgmtComponent } from './Components/equipment/equipment-mgmt/equipment-mgmt.component';
import { EquipmentCategoryMgmtComponent } from './Components/equipment-category/equipment-category-mgmt/equipment-category-mgmt.component';
import { DepartmentMgmtComponent } from './Components/department/department-mgmt/department-mgmt.component';


const routes: Routes = [
  {
    path: 'client-mgmt-home',
    component: ClientManagementHomeComponent,
    children: [
      {
        path: 'client-mgmt',
        component: ClientManagementComponent
      },
      {
        path: '',
        redirectTo: 'client-mgmt',
        pathMatch: 'full'
      }
    ]    
  },
  {
    path: 'item-mgmt-home',
    component: ItemManagementComponent   
  },
  {
    path: 'item-category-mgmt-home',
    component: ItemCategoryManagementComponent   
  },
  {
    path: 'staff-mgmt-home',
    component: StaffMgmtComponent  
  },
  {
    path: 'supplier-mgmt-home',
    component: SupplierMgmtComponent   
  },
  {
    path: 'stock-mgmt-home',
    component: StockMgmtComponent   
  },
  {
    path: 'department-mgmt-home',
    component: DepartmentMgmtComponent   
  },
  {
    path: 'equipment-category-mgmt-home',
    component: EquipmentCategoryMgmtComponent   
  },
  {
    path: 'equipment-mgmt-home',
    component: EquipmentMgmtComponent  
  },
  {
    path: 'income-type-mgmt-home',
    component: IncomeTypeMgmtComponent   
  },
  {
    path: 'expense-type-mgmt-home',
    component: ExpenseTypeMgmtComponent   
  },
  {
    path: 'invoice-type-mgmt-home',
    component: InvoiceTypeMgmtComponent   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimaryRoutingModule { }
