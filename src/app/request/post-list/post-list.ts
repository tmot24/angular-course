import { Component, computed, OnInit } from '@angular/core';
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
  constructor(private postService: PostService) {}

  protected posts$?: Observable<Post[]>;

  protected second = computed(() => this.postService.getPosts())

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }

}
