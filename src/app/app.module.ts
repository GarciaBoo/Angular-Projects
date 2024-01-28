import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessAlertCompoment } from './sucess-alert/success-alert.component';
import { WarnningAlertComponent } from './warnning-alert/warnning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertCompoment,
    WarnningAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
