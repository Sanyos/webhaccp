import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { HaccpApiService } from 'src/app/core/api/haccp-api/haccp-api.service';
import { PaymentApiService } from 'src/app/core/api/payment-api.service';
import { HaccpModel } from 'src/app/core/model/haccp.model';
import { DownloadService } from 'src/app/core/services/download/download.service';
import { PaymentStatus } from '../../../../core/enum/payment-status.enum';
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
  message: string;
  paymentStatus: PaymentStatus;
  constructor(
    private readonly downloadService: DownloadService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly haccpApiService: HaccpApiService,
    private readonly router: Router,
    private readonly paymentApiService: PaymentApiService
  ) {}

  ngOnInit(): void {
    this.getHaccp();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getPaymentResponse(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const body = { params: params, haccp: this.haccp };
      return this.paymentApiService.finishTransaction(body).subscribe((res) => {
        this.paymentStatus = res.e;
        if (res.e === PaymentStatus.FAIL) {
          this.message = `
            Sikertelen tranzakció.
            SimplePay tranzakció azonosító: ${res.t}.
            Kérjük, ellenőrizze a tranzakció során megadott adatok helyességét.
            Amennyiben minden adatot helyesen adott meg, a visszautasítás okának kivizsgálása érdekében kérjük, szíveskedjen kapcsolatba lépni kártyakibocsátó bankjával.`;
        } else if (res.e === PaymentStatus.TIMEOUT) {
          this.message =
            'Ön túllépte a tranzakció elindításának lehetséges maximális idejét.';
        } else if (res.e === PaymentStatus.CANCEL) {
          this.message = 'Ön megszakította a fizetést!';
        }
      });
    });
  }

  getHaccp(): void {
    this.haccpIdParam$.pipe(takeUntil(this.unsubscribe)).subscribe((id) => {
      if (id) {
        this.haccpApiService
          .getSingleItem(id)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe((haccp) => {
            this.haccp = haccp;
            this.haccpName = `${this.haccp.haccp_unit_name}_${this.haccp.haccp_date}_haccp`;
            this.getPaymentResponse();
          });
      }
    });
  }

  downloadDocument(): void {
    this.downloadService.download('haccp', this.haccp, this.haccpName);
    this.router.navigate(['/home']);
  }

  get status(): PaymentStatus {
    return this.paymentStatus;
  }
}
