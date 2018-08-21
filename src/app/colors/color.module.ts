import { SharedModule } from './../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorRoutingModule } from './color-routing.module';
import { ColorsComponent } from 'src/app/colors/components/colors/colors.component';

@NgModule({
  imports: [
    CommonModule,
    ColorRoutingModule,
    SharedModule
  ],
  declarations: [
    ColorsComponent
  ]
})
export class ColorModule { }
