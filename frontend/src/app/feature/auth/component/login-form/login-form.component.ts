import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';

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

  constructor(
    private router: Router,
    private readonly userApiService: UserApiService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login(): void {
    const userObject = this.loginForm.value;
    this.userApiService.login(userObject).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/companies']);
      },
      (err) => {
        console.log(err);
        this.emailOrPasswordIsWrong = true;
      }
    );
  }
}
