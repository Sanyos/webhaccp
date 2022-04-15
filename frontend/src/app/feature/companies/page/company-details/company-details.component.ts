import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, pluck, tap } from 'rxjs/operators';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import { EnumsApiService } from 'src/app/core/api/enums-api/enums-api.service';
import { CompanyCategoryType } from 'src/app/core/enum/company-category-type.enum';
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
  categoryTypes: CompanyCategoryType;
  companyId: string;
  companyData: CompanyResponseModel;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly enumsApiService: EnumsApiService,
    private readonly companyApiService: CompanyApiService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.enumsApiService.getSingleItem().subscribe((res: EnumsModel) => {
      this.categoryTypes = res.companyCategoryTypes;
    });
  }

  companyFormEvent(form: FormGroup): void {
    this.companyForm = form;
    this.companyIdParam$.subscribe((id) => {
      if (id) {
        this.companyId = id;
        this.getCompanyData(id);
      }
    });
  }

  getCompanyData(id: string) {
    this.companyApiService.getSingleItem(id).subscribe((res) => {
      console.log(res);
      this.companyData = res;
      this.companyForm.controls['category'].setValue(this.companyData.category);
      this.companyForm.controls['companyName'].setValue(
        this.companyData.companyName
      );
      this.companyForm.controls['address'].setValue(this.companyData.address);
      this.companyForm.controls['location'].setValue(this.companyData.location);
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
    console.log(this.companyForm.value);
    const data = this.companyForm.value;
    this.companyApiService.create(data).subscribe((res) => {
      console.log(res);
    });
  }

  cancel(): void {
    this.router.navigate(['/companies']);
  }
}
