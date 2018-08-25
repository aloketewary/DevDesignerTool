import { SharedModule } from './../shared/modules/shared/shared.module';
import { FontComponent } from './font/font.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontsRoutingModule } from './fonts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FontsRoutingModule,
    SharedModule
  ],
  declarations: [
    FontComponent
  ]
})
export class FontsModule { }
