import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DdtAppRoutingModule } from './ddt-app-routing.module';
import { DdtAppComponent } from './ddt-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DdtAppComponent
  ],
  imports: [
    BrowserModule,
    DdtAppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [DdtAppComponent]
})
export class DdtAppModule { }
