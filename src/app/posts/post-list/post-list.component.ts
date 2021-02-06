import { PostService } from './../post.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../posts.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSubscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPost()
    this.postsSubscription = this.postService.getPostUpdateListener().subscribe(posts => {
      this.posts = posts;
    })
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}