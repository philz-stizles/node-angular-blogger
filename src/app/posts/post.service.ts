import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './posts.model';

interface ResourceResponse {
  status: boolean
  data: any
  message: String
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  private baseUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  createPost = (newPost) => {
    this.http.post<ResourceResponse>(`${this.baseUrl}/posts`, newPost)
      .subscribe(response => {
        this.posts.push(response.data);
        this.postsUpdated.next([...this.posts]);
      })
  }

  getPosts = () => {
    this.http.get<ResourceResponse>(`${this.baseUrl}/posts`).subscribe(response => {
      this.posts = response.data;
      this.postsUpdated.next([...this.posts]);
    })
  }

  getPostUpdateListener = () => {
    return this.postsUpdated.asObservable();
  }
}