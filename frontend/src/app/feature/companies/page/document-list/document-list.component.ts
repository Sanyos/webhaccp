import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, pluck, shareReplay, switchMap, takeUntil } from 'rxjs/operators';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import { DocumentApiService } from 'src/app/core/api/document-api/document-api.service';
import { CompanyResponseModel } from 'src/app/core/model/company.model';
import { DocumentsTableComponent } from '../../component/documents-table/documents-table.component';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent implements OnInit {
  @ViewChild(DocumentsTableComponent) documentsTable: DocumentsTableComponent;
  companyIdParam$ = this.activatedRoute.params.pipe(pluck('id'));
  company$: Observable<CompanyResponseModel> = this.companyIdParam$.pipe(
    switchMap((id) =>
      this.companyApiService.getSingleItem(id).pipe(shareReplay())
    )
  );
  companyName$: Observable<string> = this.company$.pipe(
    map((company: CompanyResponseModel) => company?.companyName)
  );
  dataSource: any;
  displayedColumns: string[];
  columns: string[];
  headerTexts: string[];
  actionItems: any[];
  tableData: any[] = [];
  unsubscribe = new Subject<void>();
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly companyApiService: CompanyApiService,
    private readonly documentApiService: DocumentApiService
  ) {}

  ngOnInit(): void {
    this.getDocuments();
    this.setTableData();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getDocuments(): void {
    this.documentApiService
      .getList()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: any[]) => {
          console.log(res);
          this.tableData = [
            {
              name: 'Első',
              date: '2022.03.26.',
              valid: 'Érvényes',
            },
            {
              name: 'Második',
              date: '2022.03.26.',
              valid: 'Érvényes',
            },
            {
              name: 'Harmadik',
              date: '2022.03.26.',
              valid: 'Nem érvényes',
            },
          ];
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
    this.headerTexts = ['DOKUMENTUM NEVE', 'DÁTUM', 'ÉRVÉNYES', 'LETÖLTÉS'];
    this.columns = ['name', 'date', 'valid'];
    this.displayedColumns = ['name', 'date', 'valid', 'download'];
  }
}
