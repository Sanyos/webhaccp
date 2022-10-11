import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pub-haccp-form-second',
  templateUrl: './pub-haccp-form-second.component.html',
  styleUrls: ['./pub-haccp-form-second.component.scss'],
})
export class PubHaccpFormSecondComponent implements OnInit {
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
      haccp_glass_cleaner: new FormControl('', Validators.maxLength(255)),
      haccp_surface_disinfectant: new FormControl(
        '',
        Validators.maxLength(255)
      ),
      haccp_other_chemical: new FormControl('', Validators.maxLength(255)),
      haccp_hand_disinfectant: new FormControl('', Validators.maxLength(255)),
      haccp_2phase_dishwashing_detergent: new FormControl(
        '',
        Validators.maxLength(255)
      ),
      haccp_general_disinfectant: new FormControl(
        '',
        Validators.maxLength(255)
      ),
      haccp_scale_remover: new FormControl('', Validators.maxLength(255)),
      haccp_degreaser: new FormControl('', Validators.maxLength(255)),
    });
  }
}
