import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import { DocumentApiService } from 'src/app/core/api/document-api/document-api.service';
import { HaccpApiService } from 'src/app/core/api/haccp-api/haccp-api.service';
import { PaymentApiService } from 'src/app/core/api/payment-api/payment-api.service';
import {
  CompanyResponseModel,
  CompanyWithUserResponseModel,
} from 'src/app/core/model/company.model';
import { DocumentResponseModel } from 'src/app/core/model/document.model';
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
  haccpDocuments: HaccpModel[];
  message: string;
  paymentStatus: PaymentStatus;
  documents: DocumentResponseModel[] = [];
  companyData: CompanyResponseModel;
  constructor(
    private readonly downloadService: DownloadService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly paymentApiService: PaymentApiService,
    private readonly companyApiService: CompanyApiService,
    private readonly documentApiService: DocumentApiService,
    private readonly haccpApiService: HaccpApiService
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
          .subscribe((haccp: HaccpModel) => {
            this.haccp = haccp;
            this.haccpName = `${this.haccp.haccp_unit_name}_${this.haccp.haccp_date}_haccp`;
            this.getCompanyData(this.haccp.haccp_company_id);
            this.getDocuments(this.haccp.haccp_company_id);
            this.getHaccpDocuments(this.haccp.haccp_company_id);
            this.getPaymentResponse();
          });
      }
    });
  }

  getCompanyData(id: any) {
    this.companyApiService
      .getSingleItem(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: CompanyWithUserResponseModel) => {
        this.companyData = res;
      });
  }

  getDocuments(companyId: any): void {
    this.documentApiService
      .getList(companyId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: DocumentResponseModel[]) => {
        this.documents = res;
      });
  }

  getHaccpDocuments(companyId: any): void {
    this.haccpApiService
      .getList('all/' + companyId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: HaccpModel[]) => {
          this.haccpDocuments = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  downloadHaccp(): void {
    this.downloadService.download('haccp', this.haccp, this.haccpName);
  }

  downloadDocument(documentName: string) {
    let data;
    if (this.haccpDocuments.length) {
      data = { ...this.companyData, ...this.haccpDocuments[0] };
    } else {
      data = this.companyData;
    }
    this.downloadService.download('document', data, documentName);
  }

  get status(): PaymentStatus {
    return this.paymentStatus;
  }
}
