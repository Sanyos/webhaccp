import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {
  map,
  pluck,
  shareReplay,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import { DocumentApiService } from 'src/app/core/api/document-api/document-api.service';
import { HaccpApiService } from 'src/app/core/api/haccp-api/haccp-api.service';
import { CompanyResponseModel } from 'src/app/core/model/company.model';
import { DocumentResponseModel } from 'src/app/core/model/document.model';
import { HaccpModel } from 'src/app/core/model/haccp.model';
import { DownloadService } from 'src/app/core/services/download/download.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent implements OnInit {
  companyIdParam$ = this.activatedRoute.params.pipe(pluck('id'));
  company$: Observable<CompanyResponseModel> = this.companyIdParam$.pipe(
    tap(() => this.getDocuments()),
    switchMap((id) =>
      this.companyApiService.getSingleItem(id).pipe(shareReplay())
    )
  );
  companyName$: Observable<string> = this.company$.pipe(
    map((company: CompanyResponseModel) => company?.company_name)
  );
  documents: DocumentResponseModel[] = [];
  companyData: CompanyResponseModel;
  haccpDocuments: HaccpModel[];
  unsubscribe = new Subject<void>();
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly companyApiService: CompanyApiService,
    private readonly downloadService: DownloadService,
    private readonly documentApiService: DocumentApiService,
    private readonly haccpApiService: HaccpApiService
  ) {}

  ngOnInit(): void {
    this.getCompanyData();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getCompanyData(): void {
    this.company$.pipe(takeUntil(this.unsubscribe)).subscribe((company) => {
      this.companyData = company;
      this.getHaccpDocuments(company.company_id);
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

  downloadDocument(documentName: string): void {
    let data;
    if (this.haccpDocuments.length) {
      data = {
        ...this.companyData,
        ...this.haccpDocuments[this.haccpDocuments.length - 1],
      };
    } else {
      data = this.companyData;
    }
    this.downloadService.download('document', data, documentName);
  }
}
