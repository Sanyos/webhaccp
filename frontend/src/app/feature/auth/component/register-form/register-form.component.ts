import { CdkStepper } from '@angular/cdk/stepper';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UserRegistrationModel } from 'src/app/core/model/user.model';

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

  constructor(private fb: FormBuilder, private readonly stepper: CdkStepper) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.registerForm = this.fb.group(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        role: new FormControl('user', Validators.required),
        phone: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/g
          ),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
        ]),
        rePassword: new FormControl('', [Validators.required]),
      },
      {
        validators: this.passwordsNotMatch('password', 'rePassword'),
      }
    );
  }

  passwordsNotMatch(password: string, confirmPassword: string) {
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

  register() {
    this.userObject = this.registerForm.value;
    /* this.userDataProvider.registerUser(this.userObject).subscribe(
      (user) => {
        console.log(user);
        this.stepper.next();
      },
      (err) => {
        console.log(err);
        this.emailIsAlreadyTaken = true;
      }
    ); */
  }
}
