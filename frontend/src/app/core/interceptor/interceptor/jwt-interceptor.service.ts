import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserApiService } from '../../api/user-api/user-api.service';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptorInterceptor implements HttpInterceptor {
  constructor(private userApiService: UserApiService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const req = request.clone({
      setHeaders: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        role: this.userApiService.userRole ? this.userApiService.userRole : '',
      },
    });
    return next.handle(req);
  }
}
