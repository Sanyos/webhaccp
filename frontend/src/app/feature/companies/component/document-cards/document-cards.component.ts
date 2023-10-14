import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-document-cards',
  templateUrl: './document-cards.component.html',
  styleUrls: ['./document-cards.component.scss'],
})
export class DocumentCardsComponent implements OnInit {
  @Input() documents: any[];
  @Output() downloadEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  downloadDocument(name: string): void {
    this.downloadEvent.emit(name);
  }
}
