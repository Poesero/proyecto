import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'http://localhost:8080/post';

  constructor(private http: HttpClient) {}

  add(post: Post): Observable<any> {
    return this.http.post(this.url, post);
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + '/getAll');
  }

  edit(post: Post): Observable<any> {
    return this.http.post(this.url + '/' + post.id + '/update', post);
  }

  delete(id: number): Observable<any> {
    return this.http.post(this.url + '/' + id + '/delete', null);
  }
}
