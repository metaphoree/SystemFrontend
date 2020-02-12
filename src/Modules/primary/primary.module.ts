import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryRoutingModule } from './primary-routing.module';
import { SalesComponent } from './Components/sales/sales.component';


@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    PrimaryRoutingModule
  ]
})
export class PrimaryModule { }
