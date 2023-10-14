import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  premiumUrl: string = environment.premiumUrl;
  constructor() {}

  ngOnInit(): void {}

  onOpenPremiumHaccp() {
    window.open(this.premiumUrl, '_blank');
  }
}
