import { Injectable } from '@angular/core';
import { DownloadApiService } from '../../api/download-api/download-api.service';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(private readonly downloadApiService: DownloadApiService) {}

  download(data: any, name: any) {
    let dataObject: any = data;
    this.downloadApiService
      .downloadFile(dataObject, name)
      .subscribe((res: any) => {
        if (res) {
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
