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
  message: string;
  paymentStatus: PaymentStatus;
  documents: DocumentResponseModel[] = [];
  companyData: any;
  constructor(
    private readonly downloadService: DownloadService,
    private readonly activatedRoute: ActivatedRoute,
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
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((params) => {
        const body = { params: params, haccp: this.haccp };
        return this.paymentApiService
          .finishTransaction(body)
          .subscribe((res) => {
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
            console.log(haccp, 'haccp');
            this.haccp = haccp;
            this.haccpName = `${this.haccp.haccp_unit_name}_${this.haccp.haccp_date}_haccp`;
            if (this.haccp.haccp_company_id) {
              this.getCompanyData(this.haccp.haccp_company_id);
            } else {
              this.companyData = {
                company_name: this.haccp.haccp_company_name,
                company_location: this.haccp.haccp_company_headquarters,
                company_archived: false,
                company_category: this.haccp.haccp_company_category,
                company_billing_name: this.haccp.haccp_billing_name,
                company_billing_address: this.haccp.haccp_billing_address,
              };
            }
            this.getDocuments();
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

  getDocuments(): void {
    this.documentApiService
      .getList()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: DocumentResponseModel[]) => {
        this.documents = res;
      });
  }

  downloadHaccp(): void {
    this.downloadService.download('haccp', this.haccp, this.haccpName);
  }

  downloadDocument(documentName: string) {
    let data;
    if (this.haccp) {
      data = { ...this.companyData, ...this.haccp };
    } else {
      data = this.companyData;
    }
    this.downloadService.download('document', data, documentName);
  }

  get status(): PaymentStatus {
    return this.paymentStatus;
  }
}
