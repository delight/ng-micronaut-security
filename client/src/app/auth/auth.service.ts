import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SessionStorageService } from "ngx-store";
import { User } from "./user";

import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = null;

  constructor(private http: HttpClient, private storage: SessionStorageService) { }

  isLoggedIn(): Observable<boolean> {
    return of(this.user !== null);
  }

  login(username: string, password: string): Observable<User> {
    let body = {username: username, password: password};
    return this.http.post('/login', body)
      .pipe(
        tap( data => {
          this.storage.set('token', data['accessToken']);
        }),
        map(data => {
          return new User(data['username'], data['roles']);
        }),
        tap( user => {
          this.user = user;
        })
      )
  }

  logout() {
    this.user = null;
    this.storage.remove('token');
  }
}
