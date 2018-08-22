import { IconBottomSheetComponent } from './components/icon-bottom-sheet/icon-bottom-sheet.component';
import { SharedModule } from './../shared/modules/shared/shared.module';
import { IconComponent } from './components/icon/icon.component';
import { IconsRoutingModule } from './icons-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    IconsRoutingModule,
    SharedModule
  ],
  declarations: [
    IconComponent,
    IconBottomSheetComponent
  ],
  entryComponents: [IconBottomSheetComponent],
})
export class IconsModule { }
