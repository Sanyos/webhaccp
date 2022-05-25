import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';
import { UserResponseModel } from 'src/app/core/model/user.model';

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
  constructor(private readonly userApiService: UserApiService) {}

  ngOnInit(): void {}

  getUserData(): void {
    this.userApiService.userSubject$.subscribe((res: UserResponseModel) => {
      console.log('user data: ', res);
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
            this.passwordIsWrong = false;
            this.emailIsAlreadyTaken = false;
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
