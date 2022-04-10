import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  emailOrPasswordIsWrong: boolean;
  userId: any;
  @Output() loginFormEvent: EventEmitter<FormGroup> = new EventEmitter();
  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
    this.loginFormEvent.emit(this.loginForm);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login() {
    const userObject = this.loginForm.value;
    /*  this.authService.loginUser(userObject).subscribe(
      (res) => {
        this.activePage.setActivePage('home');
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
        this.emailOrPasswordIsWrong = true;
      }
    ); */
  }
}
