import { BoardingRootComponent } from './components/boarding-root/boarding-root.component';
import { StartupComponent } from './components/startup/startup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: BoardingRootComponent, children: [
      { path: 'startup', component: StartupComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardRoutingModule { }
