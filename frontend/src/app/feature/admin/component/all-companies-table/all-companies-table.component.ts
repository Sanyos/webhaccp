import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyResponseModel } from 'src/app/core/model/company.model';

@Component({
  selector: 'app-all-companies-table',
  templateUrl: './all-companies-table.component.html',
  styleUrls: ['./all-companies-table.component.scss'],
})
export class AllCompaniesTableComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: any;

  displayedColumns: string[];
  headerTexts: string[];
  @Input() tableData: CompanyResponseModel[] = [];

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
    this.headerTexts = [
      'ÜZLET',
      'KATEGÓRIA',
      'TELEPHELY',
      'CÉGJEGYZÉKSZÁM',
      'ADÓSZÁM',
      'FELHASZNÁLÓ',
    ];
    this.displayedColumns = [
      'company_name',
      'company_category',
      'company_location',
      'company_registration_number',
      'company_vat_number',
      'user_name',
    ];
  }
}
