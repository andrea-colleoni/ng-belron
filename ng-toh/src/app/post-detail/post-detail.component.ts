import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;

  constructor(
    private ar: ActivatedRoute,
    private ps: PostService,
  ) { }

  ngOnInit() {
    const id = +this.ar.snapshot.paramMap.get('id');
    this.ps.getPost(id).subscribe(
      p => this.post = p
    );
  }

  salva() {
    this.ps.updatePost(this.post).subscribe(
      p => console.log(p)
    );
  }
}
