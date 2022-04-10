import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login() {
    const userObject = this.loginForm.value;
    this.router.navigate(['/companies']);
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
