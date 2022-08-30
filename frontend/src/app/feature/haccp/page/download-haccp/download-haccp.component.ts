import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { HaccpApiService } from 'src/app/core/api/haccp-api/haccp-api.service';
import { HaccpModel } from 'src/app/core/model/haccp.model';
import { DownloadService } from 'src/app/core/services/download/download.service';

@Component({
  selector: 'app-download-haccp',
  templateUrl: './download-haccp.component.html',
  styleUrls: ['./download-haccp.component.scss'],
})
export class DownloadHaccpComponent implements OnInit, OnDestroy {
  unsubscribe = new Subject<void>();
  haccp: HaccpModel;
  haccpIdParam$ = this.activatedRoute.params.pipe(pluck('id'));
  haccpName: string;

  constructor(
    private readonly downloadService: DownloadService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly haccpApiService: HaccpApiService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getHaccp();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getHaccp() {
    this.haccpIdParam$.pipe(takeUntil(this.unsubscribe)).subscribe((id) => {
      if (id) {
        this.haccpApiService
          .getSingleItem(id)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe((haccp) => {
            this.haccp = haccp;
            this.haccpName = `${this.haccp.haccp_unit_name}_${this.haccp.haccp_date}_haccp`;
          });
      }
    });
  }

  downloadDocument() {
    this.downloadService.download('haccp', this.haccp, this.haccpName);
    this.router.navigate(['/home']);
  }
}
