import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';
import { UserRegistrationModel } from 'src/app/core/model/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  userObject: UserRegistrationModel;
  emailIsAlreadyTaken: boolean;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private readonly userApiService: UserApiService,
    private readonly stepper: CdkStepper
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm(): void {
    this.registerForm = this.fb.group(
      {
        user_name: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ]),
        user_email: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        user_role: new FormControl('USER', Validators.required),
        user_phone: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/g
          ),
        ]),
        user_password: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
        ]),
        rePassword: new FormControl('', [Validators.required]),
        user_archived: new FormControl(false),
      },
      {
        validators: this.passwordsNotMatch('user_password', 'rePassword'),
      }
    );
  }

  passwordsNotMatch(
    password: string,
    confirmPassword: string
  ): ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const input = control.get(password);
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

  register(): void {
    this.userObject = this.registerForm.value;
    this.userApiService.register(this.userObject).subscribe(
      (user) => {
        Swal.fire({
          title: 'Sikeres regisztráció',
          icon: 'success',
          confirmButtonColor: '#0097a7',
        });
        this.stepper.previous();
      },
      (err) => {
        console.log(err);
        this.emailIsAlreadyTaken = true;
      }
    );
  }
}
