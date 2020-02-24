import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryRoutingModule } from './primary-routing.module';
import { SalesComponent } from './Components/sales/sales.component';
import { ClientManagementComponent } from './Components/client-management/client-management.component';
import { ViewComponentsModule } from '../view-components/view-components.module';
import { ClientManagementHomeComponent } from './Components/client-management-home/client-management-home.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [SalesComponent, ClientManagementComponent, ClientManagementHomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    PrimaryRoutingModule,
    ViewComponentsModule
  ]
 // entryComponents: [ ClientManagementComponent]
})
export class PrimaryModule { }
