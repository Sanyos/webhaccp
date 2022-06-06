import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';

@Component({
  selector: 'app-haccp-category-form',
  templateUrl: './haccp-category-form.component.html',
  styleUrls: ['./haccp-category-form.component.scss'],
})
export class HaccpCategoryFormComponent implements OnInit {
  @Input() companyCategoryOptions: CompanyCategoryTypes;
  @Input() readonly: boolean = false;
  @Output() haccpCategoryFormEvent: EventEmitter<FormGroup> =
    new EventEmitter();
  haccpForm: FormGroup;
  companyCategory: CompanyCategoryTypes;

  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
    this.haccpCategoryFormEvent.emit(this.haccpForm);
  }

  createForm(): void {
    this.haccpForm = new FormGroup({
      haccp_unit_name: new FormControl('', Validators.required),
      haccp_company_location: new FormControl('', Validators.required),
      haccp_company_category: new FormControl('', Validators.required),
      haccp_company_id: new FormControl(null),
      haccp_user_id: new FormControl(null),
    });
  }
}
