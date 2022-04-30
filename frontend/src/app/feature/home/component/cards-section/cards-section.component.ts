import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.scss'],
})
export class CardsSectionComponent implements OnInit {
  cards: any[] = [
    {
      title: 'Egyszerű használat',
      icon: 'search',
      description:
        'Nam in justo vulputate, suscipit metus vestibulum, tempus ligula. Aenean porttitor, elit non pharetra commodo, metus odio tristique odio, nec facilisis lorem ex ut risus.  ',
    },
    {
      title: 'Spóroljon időt',
      icon: 'file_open',
      description:
        'Aenean porttitor, elit non pharetra commodo, metus odio tristique odio, nec facilisis lorem ex ut risus. Nam venenatis justo eget fringilla ornare.',
    },
    {
      title: 'Teljesen online',
      icon: 'star',
      description:
        'Etiam facilisis iaculis turpis ut consectetur. Duis efficitur justo in suscipit bibendum. Proin orci nulla, molestie id lectus quis, consectetur sodales sem.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
