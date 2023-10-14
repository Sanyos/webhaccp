import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor() {}

  onOpen(e: Event, type: string): void {
    e.preventDefault();
    e.stopPropagation();
    let path;
    if (type === 'aszf') {
      path = '../../../../../../assets/aszf.pdf';
    } else if (type === 'privacy') {
      path = '../../../../../../assets/adatkezelesi_tajekoztato.pdf';
    } else if (type === 'imp') {
      path = '../../../../../../assets/impresszum.pdf';
    }
    window.open(path, '_blank');
  }

  scrollTop() {
    window.scrollTo({ top: 0 });
  }
}
