
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponentsModule } from '../Modules/view-components/view-components.module';
import { PrimaryModule } from 'src/Modules/primary/primary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PrimaryModule,
    AppRoutingModule,
    ViewComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
