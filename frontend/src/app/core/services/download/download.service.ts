import { Injectable } from '@angular/core';
import { DocumentApiService } from '../../api/document-api/document-api.service';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(private readonly documentApiService: DocumentApiService) {}

  download(name: string) {
    this.documentApiService.downloadFile(name).subscribe((res: any) => {
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
