import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLinear = true;
  registerForm: FormGroup;
  loginForm: FormGroup;
  userObject: any;
  constructor() {}

  ngOnInit(): void {}

  registerFormEvent(form: FormGroup) {
    this.registerForm = form;
  }

  loginFormEvent(form: FormGroup) {
    this.loginForm = form;
  }
}
