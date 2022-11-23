import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.scss'],
})
export class CardsSectionComponent implements OnInit {
  cards: any[] = [
    {
      color: '#009688',
      title: 'ÉTTERMEK ÉS VENDÉGLÁTÁS',
      icon: 'restaurant',
      price: '34.990Ft helyett bevezető áron most csak 29.990Ft',
      list: [
        'Étterem - melegkonyhás',
        'Pizzéria',
        'Szállodák',
        'Alkalmi kitelepülés - fesztiválra, rendezvényre',
        'Hamburgeres',
        'Gyrosos',
        'Reggelizők',
        'Vegán, Vega éttermek',
        'Munkahelyi étkeztetés',
        'Kifőzde',
      ],
    },
    {
      color: '#0097a7',
      title: 'MOZGÓBOLTOK',
      icon: 'lunch_dining',
      price: '29.990Ft helyett bevezető áron most csak 24.990Ft',
      list: [
        'Pizzás',
        'Hamburgeres',
        'Gyrosos',
        'Grill csirkés',
        'Szendvicsező',
        'BBQ - Smoker',
        'Melegkonyhás étkeztetés',
        'Forralt borozó',
        'Levesező',
        'Kenyeres autó',
        'Hot dog utánfutó -autó',
        'Kávézó',
      ],
    },
    {
      color: '#0a81c0',
      title: 'BÁROK ÉS PUBOK',
      icon: 'sports_bar',
      price: '24.990Ft helyett bevezető áron most csak 19.990Ft',
      list: [
        'Bár',
        'Pub',
        'Kocsma',
        'Benzinkút',
        'Dohánybolt',
        'Szendvicsező',
        'Kávézó',
      ],
    },
    {
      color: '#00695C',
      title: 'BÜFÉK',
      icon: 'bakery_dining',
      price: '29.990Ft helyett bevezető áron most csak 24.990Ft',
      list: ['Iskolai büfé', 'Színházi büfé', 'Munkahelyi büfé', 'Fornettis'],
    },
  ];
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  navigateToHaccp() {
    this.router.navigate(['/haccp']);
  }
}
