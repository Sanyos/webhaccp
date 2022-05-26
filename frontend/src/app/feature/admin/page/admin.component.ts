import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import { DocumentApiService } from 'src/app/core/api/document-api/document-api.service';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';
import {
  CompanyResponseModel,
  CompanyWithUserResponseModel,
} from 'src/app/core/model/company.model';
import { DocumentResponseModel } from 'src/app/core/model/document.model';
import { UserResponseModel } from 'src/app/core/model/user.model';
import { SweetAlertPopupService } from 'src/app/core/services/sweet-alert-popup/sweet-alert-popup.service';
import Swal from 'sweetalert2';
import { AllCompaniesTableComponent } from '../component/all-companies-table/all-companies-table.component';
import { AllDocumentsTableComponent } from '../component/all-documents-table/all-documents-table.component';
import { UsersTableComponent } from '../component/users-table/users-table.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  @ViewChild(UsersTableComponent) usersTable: UsersTableComponent;
  @ViewChild(AllCompaniesTableComponent)
  companiesTable: AllCompaniesTableComponent;
  @ViewChild(AllDocumentsTableComponent)
  documentsTable: AllDocumentsTableComponent;
  isAdmin: boolean = true;
  dataSource: any;
  actionItems: any[];
  usersTableData: UserResponseModel[] = [];
  companiesTableData: CompanyResponseModel[] = [];
  documentsTableData: DocumentResponseModel[] = [];
  unsubscribe = new Subject<void>();
  constructor(
    private readonly sweetAlertPopupService: SweetAlertPopupService,
    private readonly userApiService: UserApiService,
    private readonly companyApiService: CompanyApiService,
    private readonly documentApiService: DocumentApiService
  ) {}

  ngOnInit(): void {
    this.getCompanies();
    this.getUsers();
    this.getDocuments();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getUsers(): void {
    this.userApiService
      .getList()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: UserResponseModel[]) => {
          res.map((user: UserResponseModel) => {
            user.user_archived
              ? (user.user_archived = 'igen')
              : (user.user_archived = 'nem');
            this.usersTableData.push(user);
          });
          this.usersTableData = res;
        },
        (err) => {
          console.log(err);
        },
        () => {
          this.usersTable.setDataSource(this.usersTableData);
        }
      );
  }

  deleteUser(user: UserResponseModel): void {
    console.log(user);
    if (user.user_archived === 'igen') {
      Swal.fire({
        title: 'Ez a felhasználó már archiválva van.',
        confirmButtonColor: '#0097a7',
      });
    } else {
      this.sweetAlertPopupService
        .openConfirmPopup('Biztosan törölni szeretnéd a felhasználót?')
        .then((result) => {
          if (result.isConfirmed) {
            const id = user.user_id;
            const data = user;
            data.user_archived = true;
            this.userApiService
              .update(data, `archiving/${id}`)
              .subscribe((res: UserResponseModel) => {
                console.log(res);
                if (res) {
                  user.user_archived = 'igen';
                  Swal.fire({
                    title: 'Sikeres törlés',
                    text: 'Felhasználó törölve!',
                    icon: 'success',
                    confirmButtonColor: '#0097a7',
                    cancelButtonText: 'Mégse',
                  });
                }
              });
          }
        });
    }
  }

  getCompanies(): void {
    this.companyApiService
      .getList('all/all')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: CompanyWithUserResponseModel[]) => {
          console.log('companies: ', res);
          this.companiesTableData = res;
        },
        (err) => {
          console.log(err);
        },
        () => {
          this.companiesTable.setDataSource(this.companiesTableData);
        }
      );
  }

  getDocuments(): void {
    this.documentApiService
      .getList('all')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: DocumentResponseModel[]) => {
          console.log('documents: ', res);
          this.documentsTableData = res;
        },
        (err) => {
          console.log(err);
        },
        () => {
          this.documentsTable.setDataSource(this.documentsTableData);
        }
      );
  }
}
