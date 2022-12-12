import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { originalPrices, prices } from 'src/app/core/config/prices-config';

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
      price: `${originalPrices.restaurant}Ft helyett bevezető áron most csak ${prices.restaurant}Ft`,
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
      price: `${originalPrices.casualrestaurant}Ft helyett bevezető áron most csak ${prices.casualrestaurant}Ft`,
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
      price: `${originalPrices.pub}Ft helyett bevezető áron most csak ${prices.pub}Ft`,
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
      price: `${originalPrices.buffet}Ft helyett bevezető áron most csak ${prices.buffet}Ft`,
      list: ['Iskolai büfé', 'Színházi büfé', 'Munkahelyi büfé', 'Fornettis'],
    },
  ];
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  navigateToHaccp() {
    this.router.navigate(['/haccp']);
  }
}
