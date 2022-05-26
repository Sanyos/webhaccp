import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from '../../config/api-config';
import {
  DocumentResponseModel,
  DocumentWithUserResponseModel,
} from '../../model/document.model';
import { BaseHttpService } from '../base-http/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentApiService extends BaseHttpService<DocumentWithUserResponseModel> {
  constructor(public http: HttpClient) {
    super(http);
    this.entity = apiConfig.document.default;
  }
}
