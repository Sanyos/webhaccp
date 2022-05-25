import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';
import Swal from 'sweetalert2';

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
      user_email: new FormControl(''),
      user_password: new FormControl(''),
    });
  }

  login(): void {
    const userObject = this.loginForm.value;
    console.log(userObject);
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

  forgotPassword(): void {
    Swal.fire({
      title: 'Elfelejtett jelszó',
      text: 'Add meg az email címed, amivel regisztráltál, és kiküldünk egy új jelszót!',
      input: 'text',
      showCancelButton: true,
      confirmButtonColor: '#0097a7',
      cancelButtonText: 'Mégse',
    }).then((result) => {
      if (result.value) {
        // TODO EMAIL CÍMRE JELSZÓ GENERÁLÁS
      }
    });
  }
}
