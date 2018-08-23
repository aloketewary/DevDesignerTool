import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PalletesComponent } from './components/palletes/palletes.component';
import { FontsComponent } from './components/fonts/fonts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/icons', pathMatch: 'full' },
  { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
  { path: 'fonts', component: FontsComponent },
  { path: 'palletes', component: PalletesComponent },
  { path: 'colors', loadChildren: './colors/color.module#ColorModule' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
