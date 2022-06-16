import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiConfig } from '../../config/api-config';
import { DocumentResponseModel } from '../../model/document.model';
import { BaseHttpService } from '../base-http/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentApiService extends BaseHttpService<DocumentResponseModel> {
  BASE_URL: string = environment.apiUrl;
  constructor(public http: HttpClient) {
    super(http);
    this.entity = apiConfig.document.default;
  }
}
