import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, tap } from 'rxjs/operators';
import { CompanyCategoryType } from 'src/app/core/enum/company-category-type.enum';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent implements OnInit {
  companyForm: FormGroup;
  companyIdQueryParam$ = this.activatedRoute.queryParams.pipe(pluck('id'));
  categoryTypes: CompanyCategoryType[];
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {}

  companyFormEvent(form: FormGroup) {
    this.companyForm = form;
    this.companyIdQueryParam$.pipe(
      tap((companyId) => {
        console.log(companyId);
        if (companyId) {
          console.log('ID: ', this.companyIdQueryParam$);
        }
      })
    );
  }

  onSave() {
    console.log(this.companyForm.value);
  }

  cancel() {
    this.router.navigate(['/companies']);
  }
}
