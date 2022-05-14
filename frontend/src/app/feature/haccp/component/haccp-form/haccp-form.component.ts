import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-haccp-form',
  templateUrl: './haccp-form.component.html',
  styleUrls: ['./haccp-form.component.scss'],
})
export class HaccpFormComponent implements OnInit {
  @Output() haccpFormEvent: EventEmitter<FormGroup> = new EventEmitter();
  haccpForm: FormGroup;
  constructor() {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm(): void {
    this.haccpForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }
}
