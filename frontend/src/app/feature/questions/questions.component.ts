import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  onOpenPremiumHaccp() {
    window.open('https://www.premiumcsoport.hu/', '_blank');
  }
}
