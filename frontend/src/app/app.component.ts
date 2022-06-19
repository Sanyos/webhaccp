import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DownloadService } from './core/services/download/download.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading$: Observable<boolean> = this.downloadService.isLoading$;
  title = 'haccp';
  constructor(private readonly downloadService: DownloadService) {}
}
