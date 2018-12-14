import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../model/post';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // posts: Post[];
  private posts: Observable<Post[]>;

  constructor(
    private ps: PostService,
    private r: Router,
  ) { }

  ngOnInit() {
    // this.ps.posts.subscribe(p => {
    //   this.posts = p;
    //   // this.posts.forEach(pt => console.log(pt.nuovaProp));
    // });
    this.posts = this.ps.subscribeToPosts();
    this.ps.getPosts();
  }

  modifica(id: number) {
    this.r.navigate(['post', id]);
  }

  cerca(searchTerm: string) {
    console.log(`cercando ${searchTerm}`);
    this.ps.searchPosts(searchTerm);
  }
}
