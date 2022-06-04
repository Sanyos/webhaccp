import { Component, OnInit, ViewChild } from '@angular/core';
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
import { CompanyResponseModel } from 'src/app/core/model/company.model';
import { DocumentResponseModel } from 'src/app/core/model/document.model';
import { DownloadService } from 'src/app/core/services/download/download.service';
import { DocumentsTableComponent } from '../../component/documents-table/documents-table.component';

@Component({
  selector: 'app-haccp-certificate',
  templateUrl: './haccp-certificate.component.html',
  styleUrls: ['./haccp-certificate.component.scss'],
})
export class HaccpCertificateComponent implements OnInit {
  @ViewChild(DocumentsTableComponent) documentsTable: DocumentsTableComponent;
  companyIdParam$ = this.activatedRoute.params.pipe(pluck('id'));
  company$: Observable<CompanyResponseModel> = this.companyIdParam$.pipe(
    tap((id) => this.getDocuments(id)),
    switchMap((id) =>
      this.companyApiService.getSingleItem(id).pipe(shareReplay())
    )
  );
  companyName$: Observable<string> = this.company$.pipe(
    map((company: CompanyResponseModel) => company?.company_name)
  );
  dataSource: any;
  displayedColumns: string[];
  columns: string[];
  headerTexts: string[];
  tableData: DocumentResponseModel[] = [];
  unsubscribe = new Subject<void>();
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly companyApiService: CompanyApiService,
    private readonly documentApiService: DocumentApiService,
    private readonly downloadService: DownloadService
  ) {}

  ngOnInit(): void {
    this.setTableData();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  downloadDocument(name: string) {
    this.downloadService.download(name);
  }

  getDocuments(companyId: any): void {
    this.documentApiService
      .getList(companyId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: DocumentResponseModel[]) => {
          console.log('documents: ', res);
          this.tableData = res;
        },
        (err) => {
          console.log(err);
        },
        () => {
          this.setTableData();
          this.documentsTable.setDataSource(this.tableData);
        }
      );
  }

  setTableData() {
    this.headerTexts = ['DOKUMENTUM NEVE', 'DÁTUM', 'ÉRVÉNYES'];
    this.columns = ['document_name', 'document_date'];
    this.displayedColumns = [
      'document_name',
      'document_date',
      'haccp-download',
      'certificate-download',
    ];
  }
}
