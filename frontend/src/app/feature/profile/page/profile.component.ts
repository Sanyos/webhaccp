import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';
import { UserResponseModel } from 'src/app/core/model/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileData: UserResponseModel;
  profileForm: FormGroup;
  passwordIsWrong: boolean = false;
  emailIsAlreadyTaken: boolean = false;
  userId: any = localStorage.getItem('id');
  unsubscribe = new Subject<void>();
  constructor(private readonly userApiService: UserApiService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getUserData(): void {
    this.userApiService
      .getSingleItem(`id/${this.userId}`)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: UserResponseModel) => {
        console.log('user data: ', res);
        if (res) {
          this.profileData = res;
          this.profileForm.controls['user_name'].setValue(
            this.profileData.user_name
          );
          this.profileForm.controls['user_phone'].setValue(
            this.profileData.user_phone
          );
          this.profileForm.controls['user_email'].setValue(
            this.profileData.user_email
          );
        }
      });
  }

  profileFormEvent(form: FormGroup): void {
    this.profileForm = form;
    this.getUserData();
  }

  onSave(): void {
    this.profileForm.controls['oldPassword'].markAsTouched();
    const userData = this.profileForm.value;
    if (this.profileForm.valid) {
      this.userApiService
        .update(userData, `edit/${this.profileData.user_id}`)
        .subscribe(
          (res) => {
            console.log('user updated: ', res);
            this.userApiService.userSubject$.next(res);
            this.passwordIsWrong = false;
            this.emailIsAlreadyTaken = false;
            this.getUserData();

            Swal.fire({
              title: 'Felhasználói adatok sikeresen módosítva!',
              icon: 'success',
              confirmButtonColor: '#0097a7',
            });
          },
          (err) => {
            console.log(err.error.text);
            if (err.error.text === 'passwordIsWrong') {
              this.passwordIsWrong = true;
              this.emailIsAlreadyTaken = false;
            } else if (err.error.text === 'emailIsAlreadyTaken') {
              this.emailIsAlreadyTaken = true;
              this.passwordIsWrong = false;
            }
          }
        );
    }
  }
}
