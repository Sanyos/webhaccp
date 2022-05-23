import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';

@Component({
  selector: 'app-companies-form',
  templateUrl: './companies-form.component.html',
  styleUrls: ['./companies-form.component.scss'],
})
export class CompaniesFormComponent implements OnInit {
  companyForm: FormGroup;
  @Input() categoryTypes: CompanyCategoryTypes;
  @Output() companyFormEvent: EventEmitter<FormGroup> = new EventEmitter();
  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
    this.companyFormEvent.emit(this.companyForm);
  }

  createForm(): void {
    this.companyForm = new FormGroup({
      company_category: new FormControl('', Validators.required),
      user_name: new FormControl('', Validators.required),
      company_address: new FormControl('', Validators.required),
      company_location: new FormControl('', Validators.required),
      company_phone: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/g
        ),
      ]),
      company_name: new FormControl('', Validators.required),
      company_headquarters: new FormControl('', Validators.required),
      company_billing_address: new FormControl('', Validators.required),
      company_registration_number: new FormControl('', Validators.required),
      company_vat_number: new FormControl('', Validators.required),
      company_archived: new FormControl(false),
    });
  }

  get categories() {
    return this.categoryTypes;
  }
}
