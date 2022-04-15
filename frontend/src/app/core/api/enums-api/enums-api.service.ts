import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from '../../config/api-config';
import { EnumsModel } from '../../model/enums.model';
import { BaseHttpService } from '../base-http/base-http.service';
@Injectable({
  providedIn: 'root',
})
export class EnumsApiService extends BaseHttpService<EnumsModel> {
  constructor(public http: HttpClient) {
    super(http);
    this.entity = apiConfig.enums.default;
  }
}
