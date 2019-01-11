import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    SpeedDialFabComponent
} from '../shared/components/speed-dial-fab/speed-dial-fab.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { PalletesComponent } from './components/palletes/palletes.component';
import { PalletesRoutingModule } from './palletes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PalletesRoutingModule,
    SharedModule
  ],
  declarations: [PalletesComponent, SpeedDialFabComponent]
})
export class PalletesModule { }
