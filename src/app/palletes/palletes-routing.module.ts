import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PalletesComponent } from './components/palletes/palletes.component';

const routes: Routes = [
  { path: '', component: PalletesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalletesRoutingModule { }
