import { ColorsComponent } from './components/colors/colors.component';
import { PalletesComponent } from './components/palletes/palletes.component';
import { FontsComponent } from './components/fonts/fonts.component';
import { IconsComponent } from './components/icons/icons.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/icons', pathMatch: 'full' },
  { path: 'icons', component: IconsComponent },
  { path: 'fonts', component: FontsComponent },
  { path: 'palletes', component: PalletesComponent },
  { path: 'colors', component: ColorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
