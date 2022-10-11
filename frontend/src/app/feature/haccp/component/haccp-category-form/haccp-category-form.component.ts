import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';
import { v4 as uuidv4 } from 'uuid';
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

  constructor(private readonly userApiService: UserApiService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.haccpCategoryFormEvent.emit(this.haccpForm);
  }

  createForm(): void {
    this.haccpForm = new FormGroup({
      haccp_unit_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_company_location: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_company_category: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_company_id: new FormControl(null),
      haccp_user_id: new FormControl(
        this.userApiService.userId ? +this.userApiService.userId : null
      ),
      haccp_transaction_id: new FormControl(uuidv4()),
      payment_success: new FormControl(false),
      haccp_user_email: new FormControl(
        this.userApiService.userEmail ? this.userApiService.userEmail : null,
        [Validators.required, Validators.maxLength(255), Validators.email]
      ),
    });
  }
}
