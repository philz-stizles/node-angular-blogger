import { PostService } from './../post.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../posts.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onAddPost(postForm: NgForm) {
    this.postService.createPost({
      title: postForm.value.title,
      content: postForm.value.content
    })
    
    postForm.resetForm()
  }
}
