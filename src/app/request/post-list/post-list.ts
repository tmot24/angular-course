import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../service/post.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [
    AsyncPipe, RouterLink
  ],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList implements OnInit {
  protected posts$?: Observable<Post[]>;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }

}
