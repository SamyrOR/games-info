import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers
      .set(
        'x-rapidapi-key',
        '34c0b26156msh0f6a7155b2daef4p1d72e4jsn327f4120c3d6'
      )
      .set('x-rapidapi-host', 'rawg-video-games-database.p.rapidapi.com');
    const authReq = req.clone({
      headers,
      setParams: { key: '92d3706b2acb4f5b9a5734eed78b8639' },
    });
    return next.handle(authReq);
  }
}
