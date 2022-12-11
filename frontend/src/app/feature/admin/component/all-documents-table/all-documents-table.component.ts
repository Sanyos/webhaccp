import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentResponseModel } from 'src/app/core/model/document.model';
import { HaccpModel } from 'src/app/core/model/haccp.model';
import { DownloadService } from 'src/app/core/services/download/download.service';
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

  constructor(private readonly downloadService: DownloadService) {
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

  downloadFile(haccp: HaccpModel): void {
    this.downloadService.download(
      'haccp',
      haccp,
      `${haccp.haccp_unit_name}_${haccp.haccp_date}_haccp`
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

  setTableData(): void {
    this.headerTexts = ['REGISZTRÁLT', 'DOKUMENTUM NEVE', 'DÁTUM'];
    this.columns = ['registered_user', 'haccp_unit_name', 'haccp_date'];
    this.displayedColumns = [
      'registered_user',
      'haccp_unit_name',
      'haccp_date',
      'download',
    ];
  }
}
