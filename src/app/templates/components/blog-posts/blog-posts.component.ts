import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {
  isLoading = true;
  constructor() { }

  ngOnInit() {
  }

}
