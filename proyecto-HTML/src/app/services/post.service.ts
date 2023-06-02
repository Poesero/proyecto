import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  privateurl = 'http://localhost:8080/post';

  constructor(private http: HttpClient) {}

  add(post: Post): Observable<any> {
    return this.http.post(this.url, post);
  }

  getFromTo(page, size): Observable<any> {
    return this.http.get(this.url + '?page=' + page + '&size=' + size);
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + '/getAll');
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  edit(post: Post): Observable<any> {
    return this.http.post(this.url + '/' + post.id + '/update', post);
  }

  delete(id: number): Observable<any> {
    return this.http.post(this.url + '/' + id + '/delete', null);
  }
}
