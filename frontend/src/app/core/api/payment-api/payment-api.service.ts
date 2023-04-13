import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiConfig } from '../../config/api-config';

@Injectable({
  providedIn: 'root',
})
export class PaymentApiService {
  BASE_URL: string = environment.apiUrl;
  constructor(public http: HttpClient) {}

  startTransaction(amount: any): Observable<any> {
    const url = `${this.BASE_URL}/${apiConfig.payment.start}`;
    return this.http.post(`${url}`, amount);
  }

  startReviewTransaction(amount: any): Observable<any> {
    const url = `${this.BASE_URL}/${apiConfig.payment.startreview}`;
    return this.http.post(`${url}`, amount);
  }

  finishTransaction(data: any): Observable<any> {
    const url = `${this.BASE_URL}/${apiConfig.payment.finish}`;
    return this.http.post(`${url}`, data);
  }

  finishReviewTransaction(data: any): Observable<any> {
    const url = `${this.BASE_URL}/${apiConfig.payment.finishreview}`;
    return this.http.post(`${url}`, data);
  }

}
