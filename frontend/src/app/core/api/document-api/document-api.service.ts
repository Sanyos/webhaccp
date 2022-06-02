import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
  BASE_URL: string = environment.apiUrl;
  constructor(public http: HttpClient) {
    super(http);
    this.entity = apiConfig.document.default;
  }

  downloadFile(query: string) {
    const url = `${this.BASE_URL}/${apiConfig.document.download}`;
    return this.http.get(`${url}/${query}`, { responseType: 'blob' });
  }
}
