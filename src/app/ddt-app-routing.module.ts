import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/onboard/startup', pathMatch:'full' },
  { path: 'onboard', loadChildren: () => import('src/app/onboard/onboard.module').then(m => m.OnboardModule) },
  { path: 'home', loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DdtAppRoutingModule { }
