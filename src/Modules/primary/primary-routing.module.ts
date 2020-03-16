import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientManagementComponent } from './Components/client-management/client-management.component';
import { ClientManagementHomeComponent } from './Components/client-management-home/client-management-home.component';
import { ItemManagementComponent } from './Components/Item/item-management/item-management.component';
import { ItemCategoryManagementComponent } from './Components/item-category/item-category-management/item-category-management.component';
import { StaffMgmtComponent } from './Components/staff/staff-mgmt/staff-mgmt.component';
import { SupplierMgmtComponent } from './Components/supplier/supplier-mgmt/supplier-mgmt.component';
import { StockMgmtComponent } from './Components/stock/stock-mgmt/stock-mgmt.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimaryRoutingModule { }
