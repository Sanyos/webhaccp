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
      category: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      companyPhoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/g
        ),
      ]),
      companyName: new FormControl('', Validators.required),
      headquarters: new FormControl('', Validators.required),
      billingAddress: new FormControl('', Validators.required),
      registrationNumber: new FormControl('', Validators.required),
      vatNumber: new FormControl('', Validators.required),
      archived: new FormControl(false),
    });
  }

  get categories() {
    return this.categoryTypes;
  }
}
