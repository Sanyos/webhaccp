import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import { EnumsApiService } from 'src/app/core/api/enums-api/enums-api.service';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';
import { CompanyWithUserResponseModel } from 'src/app/core/model/company.model';
import { EnumsModel } from 'src/app/core/model/enums.model';
import { SweetAlertPopupService } from 'src/app/core/services/sweet-alert-popup/sweet-alert-popup.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent implements OnInit {
  companyForm: FormGroup;
  companyIdParam$ = this.activatedRoute.params.pipe(pluck('id'));
  categoryTypes: CompanyCategoryTypes;
  companyId: string;
  companyData: CompanyWithUserResponseModel;
  unsubscribe = new Subject<void>();
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly enumsApiService: EnumsApiService,
    private readonly companyApiService: CompanyApiService,
    private readonly sweetAlertPopupService: SweetAlertPopupService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getCategories(): void {
    this.enumsApiService
      .getSingleItem()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: EnumsModel) => {
        this.categoryTypes = res.CompanyCategoryTypes;
      });
  }

  companyFormEvent(form: FormGroup): void {
    this.companyForm = form;
    this.companyIdParam$.pipe(takeUntil(this.unsubscribe)).subscribe((id) => {
      if (id) {
        this.companyId = id;
        this.getCompanyData(id);
      }
    });
  }

  getCompanyData(id: string): void {
    this.companyApiService
      .getSingleItem(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: CompanyWithUserResponseModel) => {
        this.companyData = res;
        this.companyForm.controls['user_name'].setValue(
          this.companyData.user_name
        );
        this.companyForm.controls['company_category'].setValue(
          this.companyData.company_category
        );
        this.companyForm.controls['company_name'].setValue(
          this.companyData.company_name
        );
        this.companyForm.controls['company_billing_name'].setValue(
          this.companyData.company_billing_name
        );
        this.companyForm.controls['company_location'].setValue(
          this.companyData.company_location
        );
        this.companyForm.controls['company_phone'].setValue(
          this.companyData.company_phone
        );
        this.companyForm.controls['company_headquarters'].setValue(
          this.companyData.company_headquarters
        );
        this.companyForm.controls['company_billing_zip'].setValue(
          this.companyData.company_billing_zip
        );
        this.companyForm.controls['company_billing_city'].setValue(
          this.companyData.company_billing_city
        );
        this.companyForm.controls['company_billing_address'].setValue(
          this.companyData.company_billing_address
        );
        this.companyForm.controls['company_registration_number'].setValue(
          this.companyData.company_registration_number
        );
        this.companyForm.controls['company_vat_number'].setValue(
          this.companyData.company_vat_number
        );
        this.companyForm.controls['company_unit_name'].setValue(
          this.companyData.company_unit_name
        );
      });
  }

  onSave(): void {
    const data = this.companyForm.value;
    if (this.companyForm.valid) {
      if (this.companyId) {
        this.companyApiService
          .update(data, this.companyId)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe((res: CompanyWithUserResponseModel) => {
            if (res) {
              this.sweetAlertPopupService
                .openSuccessPopup('Üzlet sikeresen módosítva!')
                .then(() => this.router.navigate(['/companies']));
            }
          });
      } else {
        this.companyApiService
          .create(data)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe((res: CompanyWithUserResponseModel) => {
            this.router.navigate(['/companies']);
          });
      }
    } else {
      this.sweetAlertPopupService.openErrorPopup(
        'A cég kitöltött adatai hiányosak vagy nem megfelelő!'
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/companies']);
  }
}
