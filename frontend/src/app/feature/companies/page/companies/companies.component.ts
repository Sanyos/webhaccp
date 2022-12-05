import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';
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
    private readonly companyApiService: CompanyApiService,
    private readonly userApiService: UserApiService
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
    this.userId = this.userApiService.userId;
    this.getCompanies();
  }

  getCompanies(): void {
    this.tableData = [];
    this.companyApiService
      .getList(`all/${this.userId}`)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: CompanyWithUserResponseModel[]) => {
          res.forEach((data) => {
            if (data) {
              if (data.company_category === 'RESTAURANT') {
                data.company_category = CompanyCategoryTypes.RESTAURANT;
              }
              if (data.company_category === 'CASUALRESTAURANT') {
                data.company_category = CompanyCategoryTypes.CASUALRESTAURANT;
              }
              if (data.company_category === 'PUB') {
                data.company_category = CompanyCategoryTypes.PUB;
              }
              if (data.company_category === 'BUFFET') {
                data.company_category = CompanyCategoryTypes.BUFFET;
              }
              this.tableData.push(data);
            }
          });
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
        label: 'Tanusítvány készítés',
        icon: 'verified',
        route: '/company/certificate/',
      },
      {
        label: 'Letölthető dokumentumok',
        icon: 'source',
        route: '/company/documents/',
      },
    ];
  }

  setTableData() {
    this.headerTexts = [
      'ÜZLET',
      'KATEGÓRIA',
      'TELEPHELY',
      'ADÓSZÁM',
      'CÉGJEGYZÉKSZÁM',
      'LEHETŐSÉGEK',
    ];
    this.columns = [
      'company_name',
      'company_category',
      'company_location',
      'company_vat_number',
      'company_registration_number',
    ];
    this.displayedColumns = [
      'company_name',
      'company_category',
      'company_location',
      'company_vat_number',
      'company_registration_number',
      'actions',
    ];
  }
}
