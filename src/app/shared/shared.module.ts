import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdtCommonModule } from '../common/common.module';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DdtCommonModule
  ],
  exports: [
    DdtCommonModule
  ]
})
export class SharedModule {
  constructor(iconReg: MatIconRegistry, sanitize: DomSanitizer) {
    // iconReg.addSvgIconSet(sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/mdi.svg'));
    iconReg.addSvgIcon('ddt-logo', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/svg/logo.svg'));
  }
 }
