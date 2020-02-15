import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryRoutingModule } from './primary-routing.module';
import { SalesComponent } from './Components/sales/sales.component';
import { ClientManagementComponent } from './Components/client-management/client-management.component';
import { ViewComponentsModule } from '../view-components/view-components.module';


@NgModule({
  declarations: [SalesComponent, ClientManagementComponent],
  imports: [
    CommonModule,
    PrimaryRoutingModule,
    ViewComponentsModule
  ]
})
export class PrimaryModule { }
