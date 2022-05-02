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
  constructor(private readonly userApiService: UserApiService) {}

  ngOnInit(): void {}

  getUserData(): void {
    this.userApiService.userSubject$.subscribe((res: UserResponseModel) => {
      console.log('user data: ', res);
      this.profileData = res;
      this.profileForm.controls['name'].setValue(this.profileData.name);
      this.profileForm.controls['phone'].setValue(this.profileData.phone);
      this.profileForm.controls['email'].setValue(this.profileData.email);
    });
  }

  profileFormEvent(form: FormGroup): void {
    this.profileForm = form;
    this.getUserData();
  }

  onSave(): void {
    const userData = this.profileForm.value;
    if (this.profileForm.valid) {
      this.userApiService
        .update(userData, `edit/${this.profileData._id}`)
        .subscribe((res) => {
          console.log('user updated: ', res);
        });
    }
  }
}
