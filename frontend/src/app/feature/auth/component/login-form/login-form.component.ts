import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';
import Swal from 'sweetalert2';
import { SweetAlertPopupService } from '../../../../core/services/sweet-alert-popup/sweet-alert-popup.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  hide = true;
  emailOrPasswordIsWrong: boolean;
  userId: any;
  registrationIsNotActive: boolean;
  unsubscribe = new Subject<void>();
  constructor(
    private router: Router,
    private readonly userApiService: UserApiService,
    private readonly sweetAlertPopupService: SweetAlertPopupService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  createForm(): void {
    this.loginForm = new FormGroup({
      user_email: new FormControl(''),
      user_password: new FormControl(''),
    });
  }

  login(): void {
    const userObject = this.loginForm.value;
    this.userApiService
      .login(userObject)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res) => {
          if (res) {
            res.user_role === 'ADMIN'
              ? this.router.navigate(['/admin'])
              : this.router.navigate(['/companies']);
          }
        },
        (err) => {
          console.log(err);
          if (err.error === 'reg-not-active') {
            this.registrationIsNotActive = true;
          } else if (err.error === 'invalid-password') {
            this.emailOrPasswordIsWrong = true;
          }
        }
      );
  }

  forgotPassword(): void {
    Swal.fire({
      title: 'Elfelejtett jelszó',
      text: 'Add meg az email címed, amivel regisztráltál',
      input: 'text',
      showCancelButton: true,
      confirmButtonColor: '#0097a7',
      cancelButtonText: 'Mégse',
    }).then((result) => {
      if (result.value) {
        this.sendForgotPasswordMail(result.value);
      }
    });
  }

  sendForgotPasswordMail(email: string): void {
    this.userApiService
      .getSingleItem(`forgot-password/${email}`)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res) => {
          if (res) {
            this.sweetAlertPopupService.openSuccessPopup(
              'A megadott email címre kiküldött link segítségével állítsa be új jelszavát!'
            );
          }
        },
        (err) => {
          console.log(err);
          if (err.error === 'email-not-exists') {
            this.sweetAlertPopupService.openErrorPopup(
              'Ezzel az email címmel nincs regisztrált felhasználó!'
            );
          }
        }
      );
  }
}
