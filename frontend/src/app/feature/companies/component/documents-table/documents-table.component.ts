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
import { PaymentApiService } from 'src/app/core/api/payment-api.service';
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
  @Output() downloadHaccpEvent: EventEmitter<any> = new EventEmitter();
  @Output() downloadCertificateEvent: EventEmitter<any> = new EventEmitter();

  constructor(private readonly paymentApiService: PaymentApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getTableData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  downloadCertificate(haccp: HaccpModel) {
    this.downloadCertificateEvent.emit(haccp);
  }

  downloadHaccp(haccp: HaccpModel) {
    this.downloadHaccpEvent.emit(haccp);
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

  getPrice(haccp: HaccpModel): number | undefined {
    const categoryTypes = {
      RESTAURANT: 'RESTAURANT',
      BUFFET: 'BUFFET',
      PUB: 'PUB',
      CASUALRESTAURANT: 'CASUALRESTAURANT',
    };

    let category: any = haccp.haccp_company_category;
    if (category == categoryTypes.BUFFET) {
      return 24990;
    } else if (category === categoryTypes.RESTAURANT) {
      return 29990;
    } else if (category === categoryTypes.CASUALRESTAURANT) {
      return 24990;
    } else if (category === categoryTypes.PUB) {
      return 19990;
    } else return;
  }

  startPayment(element: HaccpModel) {
    const body: any = {
      amount: this.getPrice(element),
      transactionId: element.haccp_transaction_id,
      haccpId: element.haccp_id,
      userEmail: element.haccp_user_email,
    };
    this.paymentApiService.startTransaction(body).subscribe({
      next: (res) => {
        window.open(res.paymentUrl);
      },
      error: (err) => console.log(err),
    });
  }
}
