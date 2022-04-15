import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import { CompanyCategoryType } from 'src/app/core/enum/company-category-type.enum';
import {
  CompanyRequestModel,
  CompanyResponseModel,
} from 'src/app/core/model/company.model';
import { SweetAlertPopupService } from 'src/app/core/services/sweet-alert-popup/sweet-alert-popup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit, OnDestroy {
  dataSource: any;
  displayedColumns: string[];
  columns: string[];
  headerTexts: string[];
  actionItems: any[];
  tableData: CompanyResponseModel[] = [
    {
      companyName: 'Aranykorsó',
      location: 'Budapest',
      registrationNumber: '38247839',
      vatNumber: '43534523',
      _id: '1',
      address: '',
      companyPhoneNumber: '',
      headquarters: '',
      billingAddress: '',
      category: CompanyCategoryType.PUB,
      archived: false,
    },
    {
      companyName: "Stacy's food",
      location: 'Budapest',
      registrationNumber: '38247839',
      vatNumber: '43534523',
      _id: '2',
      address: '',
      companyPhoneNumber: '',
      headquarters: '',
      billingAddress: '',
      category: CompanyCategoryType.PUB,
      archived: false,
    },
    {
      companyName: 'Aranykorsó',
      location: 'Budapest',
      registrationNumber: '38247839',
      vatNumber: '43534523',
      _id: '',
      address: '',
      companyPhoneNumber: '',
      headquarters: '',
      billingAddress: '',
      category: CompanyCategoryType.PUB,
      archived: false,
    },
    {
      companyName: "Stacy's food",
      location: 'Budapest',
      registrationNumber: '38247839',
      vatNumber: '43534523',
      _id: '',
      address: '',
      companyPhoneNumber: '',
      headquarters: '',
      billingAddress: '',
      category: CompanyCategoryType.RESTAURANT,
      archived: false,
    },
    {
      companyName: 'Aranykorsó',
      location: 'Budapest',
      registrationNumber: '38247839',
      vatNumber: '43534523',
      _id: '',
      address: '',
      companyPhoneNumber: '',
      headquarters: '',
      billingAddress: '',
      category: CompanyCategoryType.PUB,
      archived: false,
    },
    {
      companyName: "Stacy's food",
      location: 'Budapest',
      registrationNumber: '38247839',
      vatNumber: '43534523',
      _id: '',
      address: '',
      companyPhoneNumber: '',
      headquarters: '',
      billingAddress: '',
      category: CompanyCategoryType.PUB,
      archived: false,
    },
  ];
  unsubscribe = new Subject<void>();
  constructor(
    private readonly router: Router,
    private readonly sweetAlertPopupService: SweetAlertPopupService,
    private readonly companyApiService: CompanyApiService
  ) {}

  ngOnInit(): void {
    this.setActionItems();
    this.setTableData();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getCompanes(): void {
    this.companyApiService.getList().subscribe((res) => {
      console.log(res);
      this.tableData = res;
    });
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
        this.companyApiService.update(data, id).subscribe((res) => {
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
      { label: 'HACCP készítés', icon: 'assignment_turned_in', route: '' },
      { label: 'Tanúsítvány készítés', icon: 'verified', route: '' },
      { label: 'Dokumentum lista', icon: 'source', route: '' },
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
