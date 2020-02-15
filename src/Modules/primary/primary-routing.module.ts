import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientManagementComponent } from './Components/client-management/client-management.component';


const routes: Routes = [
  {
    path: 'client-mgmt',
    component: ClientManagementComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimaryRoutingModule { }
