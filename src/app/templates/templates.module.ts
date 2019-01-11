import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/modules/shared/shared.module';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { TemplatesRoutingModule } from './templates-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TemplatesRoutingModule
  ],
  declarations: [BlogPostsComponent]
})
export class TemplatesModule { }
