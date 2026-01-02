import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../service/post.service.js';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [
    RouterLink,
  ],
  templateUrl: './post-list.html',
})
export class PostList implements OnInit {
  private postService = inject(PostService);
  protected postsSignal = this.postService.posts;

  ngOnInit() {
    this.postService.refresh(); // При заходе на страницу
  }
}
