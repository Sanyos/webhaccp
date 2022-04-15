import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from '../../config/api-config';
import { CompanyResponseModel } from '../../model/company.model';
import { BaseHttpService } from '../base-http/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyApiService extends BaseHttpService<CompanyResponseModel> {
  constructor(public http: HttpClient) {
    super(http);
    this.entity = apiConfig.company.default;
  }
}
