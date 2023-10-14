import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserApiService } from '../../../core/api/user-api/user-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  hide = true;
  newPasswordForm: FormGroup;
  userId: number;
  date: string;
  unsubscribe = new Subject<void>();
  expired: boolean;

  constructor(
    private fb: FormBuilder,
    private readonly userApiService: UserApiService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getParams();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getParams(): void {
    this.userId = this.activatedRoute.snapshot.params.id;
  }

  onSave(): void {
    if (this.newPasswordForm.valid) {
      const data = this.newPasswordForm.value;
      this.userApiService
        .update(data, `change-password/${this.userId}`)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(
          (res) => {
            if (res) {
              this.router.navigate(['/login']);
            }
          },
          (err) => {
            console.log(err);
            if (err.error === 'expired') {
              this.expired = true;
            }
          }
        );
    }
  }

  createForm(): void {
    this.newPasswordForm = this.fb.group(
      {
        user_password: new FormControl(
          '',
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
        ),
        rePassword: new FormControl(''),
        user_archived: new FormControl(false),
      },
      {
        validators: this.passwordsNotMatch('user_password', 'rePassword'),
      }
    );
  }

  passwordsNotMatch(
    user_password: string,
    confirmPassword: string
  ): ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const input = control.get(user_password);
      const matchingInput = control.get(confirmPassword);
      if (input === null || matchingInput === null) {
        return null;
      }
      if (matchingInput?.errors && !matchingInput.errors.confirmedValidator) {
        return null;
      }
      if (input.value !== matchingInput.value) {
        matchingInput.setErrors({ confirmedValidator: true });
        return { confirmedValidator: true };
      } else {
        matchingInput.setErrors(null);
        return null;
      }
    };
  }
}
