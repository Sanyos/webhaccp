import {
  AfterViewInit,
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
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.scss'],
})
export class CompaniesTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: any;

  @Input() displayedColumns: string[];
  @Input() columns: string[];
  @Input() headerTexts: string[];
  @Input() actionItems: any[];
  @Input() tableData: CompanyResponseModel[] = [];
  @Output() addNewCompanyEvent: EventEmitter<any> = new EventEmitter();
  @Output() deleteCompanyEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getTableData();
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

  addNewCompany(): void {
    this.addNewCompanyEvent.emit();
  }

  onDeleteCompany(company: CompanyResponseModel): void {
    this.deleteCompanyEvent.emit(company);
  }
}
