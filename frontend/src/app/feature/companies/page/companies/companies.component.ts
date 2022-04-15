import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CompanyCategoryType } from 'src/app/core/enum/company-category-type.enum';
import { CompanyResponseModel } from 'src/app/core/model/company.model';

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
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.setActionItems();
    this.setTableData();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  addNewCompany(): void {
    this.router.navigate(['/company/details']);
  }

  setActionItems() {
    this.actionItems = [
      {
        label: 'Üzlet szerkesztése',
        icon: 'edit',
        route: '/company/details/',
      },
      { label: 'Üzlet törlése', icon: 'delete', route: '' },
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
