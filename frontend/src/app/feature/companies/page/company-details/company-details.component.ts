import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import { EnumsApiService } from 'src/app/core/api/enums-api/enums-api.service';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';
import { CompanyResponseModel } from 'src/app/core/model/company.model';
import { EnumsModel } from 'src/app/core/model/enums.model';

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
  companyData: CompanyResponseModel;
  unsubscribe = new Subject<void>();
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly enumsApiService: EnumsApiService,
    private readonly companyApiService: CompanyApiService
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
      .subscribe((res: CompanyResponseModel) => {
        console.log('company data: ', res);
        this.companyData = res;
        this.companyForm.controls['category'].setValue(
          this.companyData.category
        );
        this.companyForm.controls['companyName'].setValue(
          this.companyData.companyName
        );
        this.companyForm.controls['address'].setValue(this.companyData.address);
        this.companyForm.controls['location'].setValue(
          this.companyData.location
        );
        this.companyForm.controls['companyPhoneNumber'].setValue(
          this.companyData.companyPhoneNumber
        );
        this.companyForm.controls['headquarters'].setValue(
          this.companyData.headquarters
        );
        this.companyForm.controls['billingAddress'].setValue(
          this.companyData.billingAddress
        );
        this.companyForm.controls['registrationNumber'].setValue(
          this.companyData.registrationNumber
        );
        this.companyForm.controls['vatNumber'].setValue(
          this.companyData.vatNumber
        );
      });
  }

  onSave(): void {
    const data = this.companyForm.value;
    if (this.companyId) {
      this.companyApiService
        .update(data, this.companyId)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((res: CompanyResponseModel) => {
          console.log('company updated: ', res);
          this.router.navigate(['/companies']);
        });
    } else {
      this.companyApiService
        .create(data)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((res: CompanyResponseModel) => {
          console.log('company created: ', res);
          this.router.navigate(['/companies']);
        });
    }
  }

  cancel(): void {
    this.router.navigate(['/companies']);
  }
}
