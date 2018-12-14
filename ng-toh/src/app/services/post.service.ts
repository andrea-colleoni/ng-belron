import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PostsComponent } from '../posts/posts.component';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  private terms = new Subject<string>();
  private posts = new Subject<Post[]>();

  constructor(
    private http: HttpClient,
  ) {
    this.terms
      // prima di fare la ricerca, mi "metto in mezzo" con un pipe e imposto debounceTime e distinct
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      // sottoscrivo l'esito del searchTerm per ricaricare i post
      .subscribe(
        t => {
          console.log(`eseguo ricerca di ${t}`);
          this.getPostsService().subscribe(
            posts => this.posts.next(posts.filter(p => p.title.indexOf(t) >= 0 || p.body.indexOf(t) >= 0))
          );
        }
      );
  }

  subscribeToPosts(): Observable<Post[]> {
    return this.posts;
  }

  getPosts() {
    this.getPostsService().subscribe(
      posts => this.posts.next(posts)
    );
  }

  private getPostsService(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
      .pipe(
        // tap(_ => console.log(`scaricati i posts da ${this.url}`)), // legge e basta
        map(ps => ps.map(pt => Object.assign(new Post(), pt))),  //
        catchError(this.handleError<Post[]>('lettura posts', []))
      );
  }

  searchPosts(searchTerm: string) {
    this.terms.next(searchTerm);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${id}`)
      .pipe(
        // tap(_ => console.log(`scaricato i posts da ${this.url}`)), // legge e basta
        map(ps => Object.assign(new Post(), ps)),  //
        catchError(this.handleError<Post>('lettura post', null))
      );
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.url}/${post.id}`, post)
      .pipe(
        // tap(p => console.log(p))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
