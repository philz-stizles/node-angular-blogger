import { Subscription } from 'rxjs';
import { PostService } from './../post.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../posts.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  private postsSubscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts()
    this.postsSubscription = this.postService.getPostUpdateListener().subscribe(posts => {
      this.posts = posts;
    })
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
