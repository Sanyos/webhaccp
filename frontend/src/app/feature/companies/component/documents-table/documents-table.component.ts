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
import { PaymentApiService } from 'src/app/core/api/payment-api/payment-api.service';
import { prices } from 'src/app/core/config/prices-config';
import { HaccpModel } from 'src/app/core/model/haccp.model';
import { SweetAlertPopupService } from 'src/app/core/services/sweet-alert-popup/sweet-alert-popup.service';

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

  constructor(private readonly paymentApiService: PaymentApiService, private readonly sweetAlertPopupService: SweetAlertPopupService) {
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
      return prices.buffet;
    } else if (category === categoryTypes.RESTAURANT) {
      return prices.restaurant;
    } else if (category === categoryTypes.CASUALRESTAURANT) {
      return prices.casualrestaurant;
    } else if (category === categoryTypes.PUB) {
      return prices.pub;
    } else return;
  }

  startPayment(element: HaccpModel): void {
    this.sweetAlertPopupService
        .openConfirmPopup(`<p>Tudomásul veszem, hogy <br> a PRÉMIUM CSOPORT Szolgáltató KFT. <br>( 2045
          Törökbálint, Malom dűlő 40. ) adatkezelő által<br> a
          https://www.webhaccp.hu/ felhasználói adatbázisában tárolt <br> alábbi
          személyes adataim átadásra kerülnek az OTP Mobil Kft.,<br> mint
          adatfeldolgozó részére.<br> Az adatkezelő által továbbított adatok köre az
          alábbi: e-mail cím.</p>`)
        .then((result) => {
          if (result.isConfirmed) {
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
        });
    
  }
}
