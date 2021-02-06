// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();


  constructor() { }

  createPost = (newPost) => {
    this.posts.push(newPost);
    this.postsUpdated.next([...this.posts]);
  }

  getPost = () => {
    return [...this.posts];
  }

  getPostUpdateListener = () => {
    return this.postsUpdated.asObservable();
  }
}
