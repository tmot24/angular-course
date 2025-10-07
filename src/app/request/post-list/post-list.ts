import { Component, inject, OnInit } from '@angular/core';
import { Post, PostService } from '../service/post.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-post-list',
  imports: [
    RouterLink
  ],
  templateUrl: './post-list.html',
})
export class PostList implements OnInit {
  private postService = inject(PostService);

  protected posts$?: Observable<Post[]>;

  protected postsSignal = toSignal(this.postService.getPosts(), { initialValue: [] });

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }

}
