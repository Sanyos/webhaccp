import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-section',
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.scss']
})
export class ImageSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTop() {
    window.scrollTo({ top: 0 });
  }

}
