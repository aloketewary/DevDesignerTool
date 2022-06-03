import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardRoutingModule } from './onboard-routing.module';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { StartupComponent } from './components/startup/startup.component';
import { SharedModule } from '../shared/shared.module';
import { BoardingRootComponent } from './components/boarding-root/boarding-root.component';


@NgModule({
  declarations: [
    GettingStartedComponent,
    StartupComponent,
    BoardingRootComponent
  ],
  imports: [
    CommonModule,
    OnboardRoutingModule,
    SharedModule
  ]
})
export class OnboardModule { }
