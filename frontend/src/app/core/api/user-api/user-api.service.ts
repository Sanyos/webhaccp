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
  userSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  userObject: UserResponseModel;
  BASE_URL: string = environment.apiUrl;
  accessToken: any;
  public role: string;

  constructor(public http: HttpClient, private router: Router) {
    super(http);
    this.entity = apiConfig.user.default;
    let accessToken = localStorage.getItem('accessToken');
    let user_id = localStorage.getItem('id');
    let user_phone = localStorage.getItem('phone');
    let user_email = localStorage.getItem('email');
    let user_name = localStorage.getItem('name');
    if (accessToken) {
      this.role = this.jwtDecoder(accessToken).role;
      this.userSubject$.next({
        accessToken,
        user_id,
        user_role: this.jwtDecoder(accessToken).role,
        user_email,
        user_phone,
        user_name,
      });
    } else {
      this.userSubject$.next(null);
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
            this.role = loginData.user_role;
            this.accessToken = loginData.accessToken;
            localStorage.setItem('accessToken', loginData.accessToken);
            localStorage.setItem('id', loginData.user_id);
            localStorage.setItem('phone', loginData.user_phone);
            localStorage.setItem('email', loginData.user_email);
            localStorage.setItem('name', loginData.user_name);
            this.role = loginData.user_role;
            this.userSubject$.next({
              accessToken: loginData.accessToken,
              user_id: loginData.user_id,
              user_role: loginData.user_role,
              user_phone: loginData.user_phone,
              user_email: loginData.user_email,
              user_name: loginData.user_name,
            });
          }
        },
        (err) => {
          console.error(err);
          this.resetLocalStorage();
          this.userSubject$.next(null);
        }
      )
    );
  }

  logout(): void {
    this.resetLocalStorage();
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

  public getRole(): string {
    return this.role;
  }

  private jwtDecoder(token: string): DecodedUserToken {
    return jwt_decode(token);
  }

  public get userId(): string | null {
    if (localStorage.getItem('id')) {
      return localStorage.getItem('id');
    } else return null;
  }

  public get userEmail(): string | null {
    if (localStorage.getItem('email')) {
      return localStorage.getItem('email');
    } else return null;
  }

  resetLocalStorage(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('phone');
    localStorage.removeItem('email');
  }
}
