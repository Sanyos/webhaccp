import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DownloadApiService } from '../../api/download-api/download-api.service';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  private isLoadingSource = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSource.asObservable();

  constructor(private readonly downloadApiService: DownloadApiService) {}

  download(route: string, data: any, name: any) {
    this.isLoadingSource.next(true);
    console.log(name);
    let dataObject: any = data;
    this.downloadApiService
      .downloadFile(route, dataObject, name)
      .subscribe((res: any) => {
        if (res) {
          this.isLoadingSource.next(false);
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
