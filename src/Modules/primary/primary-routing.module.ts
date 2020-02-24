import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientManagementComponent } from './Components/client-management/client-management.component';
import { ClientManagementHomeComponent } from './Components/client-management-home/client-management-home.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimaryRoutingModule { }
