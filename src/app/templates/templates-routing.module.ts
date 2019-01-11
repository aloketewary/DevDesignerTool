import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';

const routes: Routes = [
  { path: '', component: BlogPostsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
