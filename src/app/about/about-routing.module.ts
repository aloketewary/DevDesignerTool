import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AboutResolver } from './resolver/about.resolver';

const routes: Routes = [
  {
    path: '', component:
      AboutComponent,
    pathMatch: 'full',
    resolve: { about: AboutResolver },
    runGuardsAndResolvers: 'always',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
