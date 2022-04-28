import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import { CompanyResponseModel } from 'src/app/core/model/company.model';
import { SweetAlertPopupService } from 'src/app/core/services/sweet-alert-popup/sweet-alert-popup.service';
import Swal from 'sweetalert2';
import { CompaniesTableComponent } from '../../component/companies-table/companies-table.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit, OnDestroy {
  @ViewChild(CompaniesTableComponent) companiesTable: CompaniesTableComponent;
  dataSource: any;
  displayedColumns: string[];
  columns: string[];
  headerTexts: string[];
  actionItems: any[];
  tableData: CompanyResponseModel[] = [];
  unsubscribe = new Subject<void>();
  constructor(
    private readonly router: Router,
    private readonly sweetAlertPopupService: SweetAlertPopupService,
    private readonly companyApiService: CompanyApiService
  ) {}

  ngOnInit(): void {
    this.getCompanies();
    this.setActionItems();
    this.setTableData();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getCompanies(): void {
    this.companyApiService
      .getList()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: CompanyResponseModel[]) => {
          console.log(res);
          this.tableData = res;
        },
        (err) => {
          console.log(err);
        },
        () => {
          this.setTableData();
          this.companiesTable.setDataSource(this.tableData);
        }
      );
  }

  addNewCompany(): void {
    this.router.navigate(['/company/details']);
  }

  deleteCompany(company: CompanyResponseModel): void {
    this.sweetAlertPopupService.openConfirmPopup().then((result) => {
      if (result.isConfirmed) {
        const id = company._id;
        const data = company;
        data.archived = true;
        this.companyApiService
          .update(data, id)
          .subscribe((res: CompanyResponseModel) => {
            console.log(res);
            if (res) {
              Swal.fire({
                title: 'Sikeres törlés',
                text: 'Üzleted törölve lett!',
                icon: 'success',
                confirmButtonColor: '#0097a7',
              });
            }
          });
      }
    });
  }

  setActionItems() {
    this.actionItems = [
      {
        label: 'Üzlet szerkesztése',
        icon: 'edit',
        route: '/company/details/',
      },
      {
        label: 'HACCP készítés',
        icon: 'assignment_turned_in',
        route: '/company/haccp/',
      },
      {
        label: 'Tanúsítvány készítés',
        icon: 'verified',
        route: '/company/certificate',
      },
      {
        label: 'Dokumentum lista',
        icon: 'source',
        route: '/company/documents/',
      },
      { label: 'Ellenőrző lapjaim', icon: 'fact_check', route: '' },
      { label: 'Oktatási segédlet', icon: 'info', route: '' },
    ];
  }

  setTableData() {
    this.headerTexts = [
      'ÜZLET',
      'KATEGÓRIA',
      'TELEPHELY',
      'CÉGJEGYZÉKSZÁM',
      'ADÓSZÁM',
      'LEHETŐSÉGEK',
    ];
    this.columns = [
      'companyName',
      'category',
      'location',
      'registrationNumber',
      'vatNumber',
    ];
    this.displayedColumns = [
      'companyName',
      'category',
      'location',
      'registrationNumber',
      'vatNumber',
      'actions',
    ];
  }
}
