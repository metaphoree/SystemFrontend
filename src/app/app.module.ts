
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponentsModule } from '../Modules/view-components/view-components.module';
import { PrimaryModule } from 'src/Modules/primary/primary.module';
import { HttpClientModule } from '@angular/common/http';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginComponent } from './login/login.component';
import { AppStartComponent } from './app-start/app-start.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    LoginComponent,
    AppStartComponent
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
