
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponentsModule } from '../Modules/view-components/view-components.module';
import { PrimaryModule } from 'src/Modules/primary/primary.module';
import { HttpClientModule } from '@angular/common/http';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ViewComponentsModule,
    PrimaryModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [MessageService,ConfirmationService,DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
