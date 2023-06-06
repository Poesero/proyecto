import { Injectable } from '@angular/core';
import { Usuario } from '../models/user';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:8080/user';
  constructor(private http: HttpClient) {}
  add(user: Usuario): Observable<any> {
    return this.http.post(this.url, user);
  }


  getTotal(): Observable<any> {
    return this.http.get(this.url + '/total');
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  getByMail(dni: string): Observable<any> {
    return this.http.get(this.url + '/mail/' + mail);
  }

  edit(user: Usuario): Observable<any> {
    return this.http.post(this.url + '/' + user.id + '/update', user);
  }

  delete(id: number): Observable<any> {
    return this.http.post(this.url + '/' + id + '/delete', null);
  }
}
