import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService<T> {
  API_BASE_URL: string = environment.apiUrl;
  entity: string;

  constructor(public http: HttpClient) {}

  getList(query: string = ''): Observable<Array<T>> {
    return this.http.get<Array<T>>(
      `${this.API_BASE_URL}/${this.entity}/${query}`
    );
  }

  getSingleItem(query: string = ''): Observable<T> {
    return this.http.get<T>(`${this.API_BASE_URL}/${this.entity}/${query}`);
  }

  create(paramObject: any, query: string = ''): Observable<T> {
    return this.http.post<T>(
      `${this.API_BASE_URL}/${this.entity}/${query}`,
      paramObject
    );
  }

  update(paramObject: any, query: string = ''): Observable<T> {
    return this.http.put<T>(
      `${this.API_BASE_URL}/${this.entity}/${query}`,
      paramObject
    );
  }

  delete(query: string = ''): Observable<T> {
    return this.http.delete<T>(`${this.API_BASE_URL}/${this.entity}/${query}`);
  }
}
