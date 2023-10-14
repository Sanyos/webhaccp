import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gyik',
  templateUrl: './gyik.component.html',
  styleUrls: ['./gyik.component.scss'],
})
export class GyikComponent implements OnInit {
  premiumUrl: string = environment.premiumUrl;
  constructor() {}

  ngOnInit(): void {}
}
