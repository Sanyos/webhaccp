import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LastAuthorityEnum, ReviewReasonEnum, ReviewerJobEnum } from 'src/app/core/model/haccp.model';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {


  haccpForm: FormGroup;

  @Input() reviewReasonOptions: ReviewReasonEnum;
  @Input() reviewerJobOptions: ReviewerJobEnum;
  @Input() lastAuthorityOptions: LastAuthorityEnum;

  radioOptions = [
    { key: true, value: 'Igen' },
    { key: false, value: 'Nem' },
  ];

  @Output() cancelEvent: EventEmitter<any> = new EventEmitter();
  @Output() reviewEvent: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.createForm();
    console.log(this.reviewReasonOptions)
   }


  createForm(): void {
    this.haccpForm = new FormGroup({
      review_reason: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      reviewer_name: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      reviewer_job: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      haccp_docs: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      haccp_process: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      haccp_additionals: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      haccp_building: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      haccp_workers: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      yearly_study_date: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      haccp_layout: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      haccp_routes: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      tracebility: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      self_control: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      last_authority_check: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      last_authority: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      has_paper: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      has_health_care: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      pest_control_date: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      pest_control_company: new FormControl([],  [Validators.required, Validators.maxLength(255),]),
      haccp_date: new FormControl(this.formatDate(new Date())),
    });
  }

  ngOnInit(): void {
  }


  onCancel(): void {
    this.cancelEvent.emit();
  }

  onSave(): void {
    console.log("save");
    this.reviewEvent.emit(this.haccpForm.value)
  }
  formatDate(date: Date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
}
