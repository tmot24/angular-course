import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  public postsResource = rxResource({
    stream: () => this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts'),
    defaultValue: []
  });

  public posts = this.postsResource.value;
  public isLoadingPosts = this.postsResource.isLoading;
  public errorPosts = this.postsResource.error;
  public statusPosts = this.postsResource.status;

  public refresh() {
    this.postsResource.reload();
  }

  public getPostById(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
