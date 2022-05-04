import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';
import { UserResponseModel } from 'src/app/core/model/user.model';
import { SweetAlertPopupService } from 'src/app/core/services/sweet-alert-popup/sweet-alert-popup.service';
import Swal from 'sweetalert2';
import { UsersTableComponent } from '../component/users-table/users-table.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  @ViewChild(UsersTableComponent) usersTable: UsersTableComponent;
  isAdmin: boolean = true;
  dataSource: any;
  displayedColumns: string[];
  columns: string[];
  headerTexts: string[];
  actionItems: any[];
  tableData: UserResponseModel[] = [];
  unsubscribe = new Subject<void>();
  constructor(
    private readonly router: Router,
    private readonly sweetAlertPopupService: SweetAlertPopupService,
    private readonly userApiService: UserApiService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.setTableData();
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
            user.archived ? (user.archived = 'igen') : (user.archived = 'nem');
            this.tableData.push(user);
          });
          this.tableData = res;
        },
        (err) => {
          console.log(err);
        },
        () => {
          this.setTableData();
          this.usersTable.setDataSource(this.tableData);
        }
      );
  }

  deleteUser(company: UserResponseModel): void {
    this.sweetAlertPopupService.openConfirmPopup().then((result) => {
      if (result.isConfirmed) {
        const id = company._id;
        const data = company;
        data.archived = true;
        this.userApiService
          .update(data, id)
          .subscribe((res: UserResponseModel) => {
            console.log(res);
            if (res) {
              Swal.fire({
                title: 'Sikeres törlés',
                text: 'Felhasználó archiválva!',
                icon: 'success',
                confirmButtonColor: '#0097a7',
                cancelButtonText: 'Mégse',
              });
            }
          });
      }
    });
  }

  setTableData() {
    this.headerTexts = ['NÉV', 'EMAIL CÍM', 'TELEFONSZÁM', 'ARCHIVÁLVA'];
    this.columns = ['name', 'email', 'phone', 'archived'];
    this.displayedColumns = ['name', 'email', 'phone', 'archived', 'actions'];
  }
}
