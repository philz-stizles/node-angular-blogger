import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../posts.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  @Output() addPost = new EventEmitter<Post>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(postForm: NgForm) {
    this.addPost.emit({
      title: postForm.value.title,
      content: postForm.value.content
    })

    postForm.reset()
  }
}
