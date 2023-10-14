import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('myStepper') private myStepper: MatStepper;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.router.url === '/login#registration') {
      this.myStepper.next();
    }
  }
}
