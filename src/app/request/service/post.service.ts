import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  public getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
  public getPostById(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
