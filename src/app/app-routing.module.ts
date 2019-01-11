import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/icons', pathMatch: 'full' },
  { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
  { path: 'fonts', loadChildren: './fonts/fonts.module#FontsModule' },
  { path: 'palletes', loadChildren: './palletes/palletes.module#PalletesModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'colors', loadChildren: './colors/color.module#ColorModule' },
  { path: 'templates', loadChildren: './templates/templates.module#TemplatesModule' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
