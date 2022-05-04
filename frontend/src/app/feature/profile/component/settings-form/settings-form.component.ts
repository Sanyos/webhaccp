import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  Validator,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss'],
})
export class SettingsFormComponent implements OnInit, OnDestroy {
  profileForm: FormGroup;
  hide = true;
  unsubscribe = new Subject<void>();
  @Output() profileFormEvent: EventEmitter<FormGroup> = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.profileFormEvent.emit(this.profileForm);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  createForm(): void {
    this.profileForm = this.fb.group(
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
        oldPassword: new FormControl('', [Validators.required]),
        password: new FormControl(
          '',
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
        ),
        rePassword: new FormControl(''),
      },
      {
        validators: this.passwordsNotMatch('password', 'rePassword'),
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
}
