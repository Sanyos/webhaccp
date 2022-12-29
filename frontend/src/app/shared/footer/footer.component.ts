import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor() {}

  onOpen(e: Event, type: string): void {
    console.log(type);
    e.preventDefault();
    e.stopPropagation();
    let path;
    type === 'aszf'
      ? (path = '../../../../../../assets/aszf.pdf')
      : (path = '../../../../../../assets/adatkezelesi_tajekoztato.pdf');
    window.open(path, '_blank');
  }

  scrollTop() {
    window.scrollTo({ top: 0 });
  }
}
