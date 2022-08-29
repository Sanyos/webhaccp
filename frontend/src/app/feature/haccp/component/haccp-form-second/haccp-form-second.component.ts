import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';

@Component({
  selector: 'app-haccp-form-second',
  templateUrl: './haccp-form-second.component.html',
  styleUrls: ['./haccp-form-second.component.scss'],
})
export class HaccpFormSecondComponent implements OnInit {
  @Output() haccpFormEvent: EventEmitter<FormGroup> = new EventEmitter();
  haccpForm: FormGroup;
  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
    this.haccpFormEvent.emit(this.haccpForm);
  }

  createForm(): void {
    this.haccpForm = new FormGroup({
      haccp_glass_cleaner: new FormControl(''),
      haccp_surface_disinfectant: new FormControl(''),
      haccp_other_chemical: new FormControl(''),
      haccp_hand_disinfectant: new FormControl(''),
      haccp_2phase_dishwashing_detergent: new FormControl(''),
      haccp_general_disinfectant: new FormControl(''),
      haccp_scale_remover: new FormControl(''),
      haccp_degreaser: new FormControl(''),
    });
  }
}
