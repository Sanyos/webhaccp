import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor() {
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
    this.columns = ['user', 'name', 'date', 'valid'];
    this.displayedColumns = [
      'user',
      'name',
      'date',
      'valid',
      'download',
      'confirm',
    ];
  }
}
