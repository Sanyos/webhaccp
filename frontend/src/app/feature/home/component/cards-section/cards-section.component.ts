import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { originalPrices, prices, pricesWithoutVat } from 'src/app/core/config/prices-config';

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
      price: `${originalPrices.restaurant}Ft/év helyett bevezető áron most csak ${pricesWithoutVat.restaurant}Ft + ÁFA/év`,
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
      price: `${originalPrices.casualrestaurant}Ft/év helyett bevezető áron most csak ${pricesWithoutVat.casualrestaurant}Ft + ÁFA/év`,
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
      price: `${originalPrices.pub}Ft/év helyett bevezető áron most csak ${pricesWithoutVat.pub}Ft + ÁFA/év`,
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
      price: `${originalPrices.buffet}Ft/év helyett bevezető  most csak ${pricesWithoutVat.buffet}Ft + ÁFA/év`,
      list: ['Iskolai büfé', 'Színházi büfé', 'Munkahelyi büfé', 'Fornettis'],
    },
  ];
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  navigateToHaccp() {
    this.router.navigate(['/haccp']);
    window.scrollTo({ top: 0 });
  }
}
