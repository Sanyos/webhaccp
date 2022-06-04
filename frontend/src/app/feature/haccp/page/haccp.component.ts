import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import { EnumsApiService } from 'src/app/core/api/enums-api/enums-api.service';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';
import {
  CompanyResponseModel,
  CompanyWithUserResponseModel,
} from 'src/app/core/model/company.model';
import { EnumsModel } from 'src/app/core/model/enums.model';
import {
  ColdStorageProductEnum,
  DeliveryMethodEnum,
  DishToWashEnum,
  DishwasherEnum,
  EggEnum,
  EntranceEnum,
  FoodWasteTransportEnum,
  PestControlEnum,
  ProductPreparatoryEnum,
  RefigratorEnum,
  SewageDrainEnum,
  StorageEnum,
  WaterSupplyEnum,
} from 'src/app/core/model/haccp.model';
import { SweetAlertPopupService } from 'src/app/core/services/sweet-alert-popup/sweet-alert-popup.service';

@Component({
  selector: 'app-haccp',
  templateUrl: './haccp.component.html',
  styleUrls: ['./haccp.component.scss'],
})
export class HaccpComponent implements OnInit, OnDestroy {
  companyIdParam$ = this.activatedRoute.params.pipe(pluck('id'));
  companyData: CompanyResponseModel;

  unsubscribe = new Subject<void>();

  haccpCategoryForm: FormGroup;
  haccpForm: FormGroup;
  secondHaccpForm: FormGroup;
  thirdHaccpForm: FormGroup;

  coldStorageProductOptions: ColdStorageProductEnum;
  productPreparatoryOptions: ProductPreparatoryEnum;
  sewageDrainOptions: SewageDrainEnum;
  waterSupplyOptions: WaterSupplyEnum;
  entranceOptions: EntranceEnum;
  foodWasteTransportOptions: FoodWasteTransportEnum;
  pestControlOptions: PestControlEnum;
  dishToWashOptions: DishToWashEnum;
  dishwasherOptions: DishwasherEnum;
  eggOptions: EggEnum;
  deliveryMethodOptions: DeliveryMethodEnum;
  refigratorOptions: RefigratorEnum;
  storageOptions: StorageEnum;
  companyCategoryOptions: CompanyCategoryTypes;
  constructor(
    private readonly sweetAlertPopupService: SweetAlertPopupService,
    private readonly router: Router,
    private readonly enumsApiService: EnumsApiService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly companyApiService: CompanyApiService
  ) {}

  ngOnInit(): void {
    this.getEnums();
    this.getCompanyData();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getCompanyData() {
    this.companyIdParam$.pipe(takeUntil(this.unsubscribe)).subscribe((id) => {
      if (id) {
        this.companyApiService
          .getSingleItem(id)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe((res: CompanyWithUserResponseModel) => {
            console.log('company data: ', res);
            this.companyData = res;
            this.haccpCategoryForm.controls['haccp_unit_name'].setValue(
              this.companyData.company_name
            );
            this.haccpCategoryForm.controls['haccp_unit_name'].disable();
            this.haccpCategoryForm.controls['haccp_company_location'].setValue(
              this.companyData.company_location
            );
            this.haccpCategoryForm.controls['haccp_company_location'].disable();
            this.haccpCategoryForm.controls['haccp_company_category'].setValue(
              this.companyData.company_category
            );
            this.haccpCategoryForm.controls['haccp_company_category'].disable();
          });
      }
    });
  }

  getEnums(): void {
    this.enumsApiService
      .getSingleItem()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: EnumsModel) => {
        this.coldStorageProductOptions = res.ColdStorageProductEnum;
        this.sewageDrainOptions = res.SewageDrainEnum;
        this.waterSupplyOptions = res.WaterSupplyEnum;
        this.entranceOptions = res.EntranceEnum;
        this.foodWasteTransportOptions = res.FoodWasteTransportEnum;
        this.pestControlOptions = res.PestControlEnum;
        this.dishToWashOptions = res.DishToWashEnum;
        this.dishwasherOptions = res.DishwasherEnum;
        this.eggOptions = res.EggEnum;
        this.deliveryMethodOptions = res.DeliveryMethodEnum;
        this.refigratorOptions = res.RefigratorEnum;
        this.productPreparatoryOptions = res.ProductPreparatoryEnum;
        this.storageOptions = res.StorageEnum;
        this.companyCategoryOptions = res.CompanyCategoryTypes;
      });
  }

  haccpCategoryFormEvent(form: FormGroup) {
    this.haccpCategoryForm = form;
  }

  haccpFormEvent(form: FormGroup): void {
    this.haccpForm = form;
  }

  secondHaccpFormEvent(form: FormGroup): void {
    this.secondHaccpForm = form;
  }

  thirdHaccpFormEvent(form: FormGroup): void {
    this.thirdHaccpForm = form;
  }

  onSave(): void {
    console.log(
      this.haccpForm.value,
      this.secondHaccpForm.value,
      this.thirdHaccpForm.value
    );
    // TODO FIZETÉS
  }

  onCancel() {
    const title = 'Biztosan ki szeretnél lépni?';
    const text = 'A kitöltött adatok elvesznek.';
    this.sweetAlertPopupService.openConfirmPopup(title, text).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/home']);
      }
    });
  }
}
