import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiConfig } from '../../config/api-config';
import { HaccpModel } from '../../model/haccp.model';
import { BaseHttpService } from '../base-http/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class HaccpApiService extends BaseHttpService<HaccpModel> {
  BASE_URL: string = environment.apiUrl;
  constructor(public http: HttpClient) {
    super(http);
    this.entity = apiConfig.haccp.default;
  }
}
