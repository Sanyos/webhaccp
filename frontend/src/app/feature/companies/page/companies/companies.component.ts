import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import {
  CompanyResponseModel,
  CompanyWithUserResponseModel,
} from 'src/app/core/model/company.model';
import { SweetAlertPopupService } from 'src/app/core/services/sweet-alert-popup/sweet-alert-popup.service';
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
  userId: any;
  constructor(
    private readonly router: Router,
    private readonly sweetAlertPopupService: SweetAlertPopupService,
    private readonly companyApiService: CompanyApiService
  ) {}

  ngOnInit(): void {
    this.setActionItems();
    this.setTableData();
    this.getUserId();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getUserId(): void {
    this.userId = localStorage.getItem('id');
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyApiService
      .getList(`all/${this.userId}`)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: CompanyWithUserResponseModel[]) => {
          console.log('get companies: ', res);
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
    this.sweetAlertPopupService
      .openConfirmPopup('Biztosan törölni szeretnéd az üzletet?')
      .then((result) => {
        if (result.isConfirmed) {
          const id = company.company_id;
          const data = company;
          data.company_archived = true;
          this.companyApiService
            .update(data, id)
            .subscribe((res: CompanyResponseModel) => {
              console.log('company archived: ', res);
              if (res) {
                this.getCompanies();
                this.sweetAlertPopupService.openSuccessPopup(
                  'Sikeres törlés',
                  'Üzleted törölve lett!'
                );
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
        route: '/haccp/',
      },
      {
        label: 'Tanúsítvány készítés',
        icon: 'verified',
        route: '/company/certificate/',
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
      'company_name',
      'company_category',
      'company_location',
      'company_registration_number',
      'company_vat_number',
    ];
    this.displayedColumns = [
      'company_name',
      'company_category',
      'company_location',
      'company_registration_number',
      'company_vat_number',
      'actions',
    ];
  }
}
