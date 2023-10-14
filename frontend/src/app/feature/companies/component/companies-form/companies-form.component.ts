import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';

@Component({
  selector: 'app-companies-form',
  templateUrl: './companies-form.component.html',
  styleUrls: ['./companies-form.component.scss'],
})
export class CompaniesFormComponent implements OnInit {
  userId = localStorage.getItem('id');
  userName = localStorage.getItem('name');
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
      company_category: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      user_name: new FormControl(this.userName),
      company_billing_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      company_location: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      company_phone: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/g
        ),
        Validators.maxLength(255),
      ]),
      company_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      company_unit_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      company_headquarters: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      
      company_billing_zip: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      
      company_billing_city: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      company_billing_address: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      company_registration_number: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern(/([0-9]{2}-[0-9]{2}-[0-9]{6})/),
      ]),
      company_vat_number: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern(/([0-9]{7}-[0-9]{1}-[0-9]{2})/),
      ]),
      company_archived: new FormControl(false),
      company_user_id: new FormControl(this.userId),
    });
  }

  get categories() {
    return this.categoryTypes;
  }
}
