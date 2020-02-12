
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponentsModule } from '../Modules/view-components/view-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ViewComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
