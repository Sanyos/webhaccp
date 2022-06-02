import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentApiService } from 'src/app/core/api/document-api/document-api.service';
import { DocumentResponseModel } from 'src/app/core/model/document.model';
@Component({
  selector: 'app-all-documents-table',
  templateUrl: './all-documents-table.component.html',
  styleUrls: ['./all-documents-table.component.scss'],
})
export class AllDocumentsTableComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns: string[];
  columns: string[];
  headerTexts: string[];
  @Input() tableData: DocumentResponseModel[] = [];

  constructor(private readonly documentApiService: DocumentApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getTableData();
    this.setTableData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  downloadFile(name: string) {
    const fullName = name + '.pdf';
    this.documentApiService.downloadFile(fullName).subscribe(
      (res: any) => {
        let blob: any = new Blob([res], { type: 'application/pdf' });
        let pdfUrl = window.URL.createObjectURL(blob);
        var PDF_link = document.createElement('a');
        PDF_link.href = pdfUrl;
        PDF_link.download = fullName;
        PDF_link.click();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setDataSource(tableData: any): void {
    this.dataSource = new MatTableDataSource(tableData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getTableData(): void {
    this.setDataSource(this.tableData);
  }

  setTableData() {
    this.headerTexts = ['REGISZTRÁLT', 'DOKUMENTUM NEVE', 'DÁTUM', 'ÉRVÉNYES'];
    this.columns = ['registered_user', 'document_name', 'document_date'];
    this.displayedColumns = [
      'registered_user',
      'document_name',
      'document_date',
      'download',
    ];
  }
}
