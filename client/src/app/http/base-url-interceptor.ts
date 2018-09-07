import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment} from "../../environments/environment";

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let url = req.url;
    if (!url.startsWith('http')) {
      if (url.startsWith('/')) {
        url = url.substring(1);
      }
      url = environment.server + url;
      req = req.clone({
        url: url
      });
    }

    return next.handle(req);
  }
}
