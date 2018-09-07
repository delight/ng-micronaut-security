import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { SessionStorageService } from "ngx-store";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storage: SessionStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = this.storage.get('token');

    console.log('in auth interceptor');
    console.log(authToken);

    if (authToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
    }

    return next.handle(req);
  }
}
