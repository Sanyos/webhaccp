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
import { HaccpModel } from 'src/app/core/model/haccp.model';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.scss'],
})
export class DocumentsTableComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  @Input() displayedColumns: string[];
  @Input() columns: string[];
  @Input() headerTexts: string[];
  @Input() tableData: HaccpModel[] = [];
  @Output() downloadEvent: EventEmitter<any> = new EventEmitter();

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

  downloadCertificate(name: string) {
    this.downloadEvent.emit(name);
  }

  downloadHaccp(name: string) {
    this.downloadEvent.emit(name);
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
}
