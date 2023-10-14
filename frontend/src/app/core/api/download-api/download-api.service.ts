import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiConfig } from '../../config/api-config';

@Injectable({
  providedIn: 'root',
})
export class DownloadApiService {
  BASE_URL: string = environment.apiUrl;
  constructor(public http: HttpClient) {}

  downloadFile(route: string, data: any, query: string): Observable<any> {
    const url = `${this.BASE_URL}/${apiConfig.download.default}/${route}`;
    return this.http.post(`${url}/${query}`, data, {
      responseType: 'blob',
    });
  }
}
