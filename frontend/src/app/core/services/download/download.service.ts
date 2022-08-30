import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DownloadApiService } from '../../api/download-api/download-api.service';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(
    private readonly downloadApiService: DownloadApiService,
    private readonly loaderService: LoaderService
  ) {}

  download(route: string, data: any, name: any) {
    this.loaderService.setLoaderValue(true);
    console.log('dokumentum letöltés: ', name);
    let dataObject: any = data;
    this.downloadApiService
      .downloadFile(route, dataObject, name)
      .subscribe((res: any) => {
        if (res) {
          this.loaderService.setLoaderValue(false);
          let blob: any = new Blob([res], { type: 'application/pdf' });
          let pdfUrl = window.URL.createObjectURL(blob);
          let PDF_link = document.createElement('a');
          PDF_link.href = pdfUrl;
          PDF_link.download = name;
          PDF_link.click();
        }
      });
  }
}
