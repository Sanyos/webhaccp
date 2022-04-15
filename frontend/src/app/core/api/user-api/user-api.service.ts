import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { apiConfig } from '../../config/api-config';
import {
  UserLoginModel,
  UserResponseModel,
  DecodedUserToken,
  UserRegistrationModel,
} from '../../model/user.model';
import { BaseHttpService } from '../base-http/base-http.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserApiService extends BaseHttpService<UserResponseModel> {
  userSubject$: BehaviorSubject<any> = new BehaviorSubject('');
  BASE_URL: string = environment.apiUrl;
  accessToken: any;
  private role: string;

  constructor(public http: HttpClient, private router: Router) {
    super(http);
    this.entity = apiConfig.user.default;
    let accessToken = localStorage.getItem('accessToken');
    let id = localStorage.getItem('id');
    if (accessToken) {
      this.userSubject$.next({
        accessToken,
        id,
        role: this.jwtDecoder(accessToken)?.role,
      });
    }
  }

  register(registerData: UserRegistrationModel): Observable<UserResponseModel> {
    const url = `${this.BASE_URL}${apiConfig.user.register}`;
    return this.http.post<UserResponseModel>(url, registerData);
  }

  login(loginData: UserLoginModel): Observable<UserResponseModel> {
    const url = `${this.BASE_URL}${apiConfig.user.login}`;
    return this.http.post<UserResponseModel>(url, loginData).pipe(
      tap(
        (loginData: UserResponseModel) => {
          if (loginData) {
            this.role = loginData.role;
            this.accessToken = loginData.accessToken;
            localStorage.setItem('accessToken', loginData.accessToken);
            localStorage.setItem('id', loginData._id);
            this.userSubject$.next({
              accessToken: loginData.accessToken,
              id: loginData._id,
              role: loginData.role,
            });
          }
        },
        (err) => {
          console.error(err);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('id');
          this.userSubject$.next(null);
        }
      )
    );
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('id');
    this.userSubject$.next(null);
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): string | null {
    let accessToken = localStorage.getItem('accessToken');
    return accessToken;
  }

  public get personLoggedInObj(): Observable<UserResponseModel> {
    return this.userSubject$.asObservable();
  }

  public get userRole(): string {
    return this.role;
  }

  private jwtDecoder(token: string): DecodedUserToken | null {
    try {
      return jwt_decode(token);
    } catch (err) {
      return null;
    }
  }
}
