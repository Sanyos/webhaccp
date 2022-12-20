import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { CompanyApiService } from 'src/app/core/api/company-api/company-api.service';
import { EnumsApiService } from 'src/app/core/api/enums-api/enums-api.service';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';
import {
  CompanyRequestModel,
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
  HaccpModel,
  IngredientEnum,
  PestControlEnum,
  ProductPreparatoryEnum,
  RefigratorEnum,
  SewageDrainEnum,
  StorageEnum,
  WaterSupplyEnum,
} from 'src/app/core/model/haccp.model';
import { SweetAlertPopupService } from 'src/app/core/services/sweet-alert-popup/sweet-alert-popup.service';
import { ChangeDetectorRef } from '@angular/core';
import { HaccpApiService } from 'src/app/core/api/haccp-api/haccp-api.service';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';
import { PaymentApiService } from 'src/app/core/api/payment-api/payment-api.service';
import { prices } from 'src/app/core/config/prices-config';
@Component({
  selector: 'app-haccp',
  templateUrl: './haccp.component.html',
  styleUrls: ['./haccp.component.scss'],
})
export class HaccpComponent implements OnInit, OnDestroy {
  haccpId: number;
  userId: string = this.userApiService.userId ? this.userApiService.userId : '';
  companyIdParam$ = this.activatedRoute.params.pipe(pluck('id'));
  companyData: CompanyWithUserResponseModel;
  readonly: boolean = false;
  unsubscribe = new Subject<void>();

  haccpCategoryForm: FormGroup;
  haccp: HaccpModel;

  companies: CompanyResponseModel[];

  ingredientsOptions: IngredientEnum;
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
    private readonly companyApiService: CompanyApiService,
    private cdref: ChangeDetectorRef,
    private readonly haccpApiService: HaccpApiService,
    private readonly userApiService: UserApiService,
    private readonly paymentApiService: PaymentApiService
  ) {
    this.getCompanyData();
  }

  ngOnInit(): void {
    this.getEnums();
    if (this.userId) {
      this.getAllCompaniesByUser();
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getAllCompaniesByUser(): void {
    this.companyApiService
      .getList(`all/${this.userId}`)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        this.companies = res;
      });
  }

  getCompanyData(): void {
    this.companyIdParam$.pipe(takeUntil(this.unsubscribe)).subscribe((id) => {
      if (id) {
        this.companyApiService
          .getSingleItem(id)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe((res: CompanyWithUserResponseModel) => {
            console.log(res);
            this.companyData = res;
            this.readonly = true;
            this.haccpCategoryForm.controls[
              'haccp_company_headquarters'
            ].setValue(this.companyData.company_location);
            this.haccpCategoryForm.controls['haccp_company_category'].setValue(
              this.companyData.company_category
            );
            this.haccpCategoryForm.controls['haccp_billing_address'].setValue(
              this.companyData.company_billing_address
            );
            this.haccpCategoryForm.controls['haccp_billing_name'].setValue(
              this.companyData.company_billing_name
            );
            this.haccpCategoryForm.controls['haccp_company_id'].setValue(
              this.companyData.company_id
            );
            this.haccpCategoryForm.controls[
              'haccp_company_vat_number'
            ].setValue(this.companyData.company_vat_number);
            this.haccpCategoryForm.controls['haccp_unit_name'].setValue(
              this.companyData.company_name
            );
          });
      }
    });
  }

  getEnums(): void {
    this.enumsApiService
      .getSingleItem()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: EnumsModel) => {
        this.ingredientsOptions = res.IngredientsEnum;
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

  haccpCategoryFormEvent(form: FormGroup): void {
    this.haccpCategoryForm = form;
    this.cdref.detectChanges();
  }

  haccpEvent(form: HaccpModel): void {
    this.haccp = form;
  }

  onSave(): void {
    const arr = [this.haccpCategoryForm.value, this.haccp];
    this.haccp = Object.assign({}, ...arr);
    this.haccpApiService
      .create(this.haccp)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: HaccpModel) => {
        if (res) {
          this.haccpId = res.haccp_id;
          const title = 'Tovább a fizetéshez';
          const text = 'HACCP adatbekérő sikeresen kitöltve';
          this.sweetAlertPopupService.openSuccessPopup(title, text).then(() => {
            this.startPayment();
          });
          if (this.userId) {
            this.saveCompanyIfNotExistAlready();
          }
        }
      });
  }

  getPrice(): number | undefined {
    const categoryTypes = {
      RESTAURANT: 'RESTAURANT',
      BUFFET: 'BUFFET',
      PUB: 'PUB',
      CASUALRESTAURANT: 'CASUALRESTAURANT',
    };

    let category: any = this.haccp.haccp_company_category;
    if (category == categoryTypes.BUFFET) {
      return prices.buffet;
    } else if (category === categoryTypes.RESTAURANT) {
      return prices.restaurant;
    } else if (category === categoryTypes.CASUALRESTAURANT) {
      return prices.casualrestaurant;
    } else if (category === categoryTypes.PUB) {
      return prices.pub;
    } else return;
  }

  startPayment(): void {
    const body: any = {
      amount: this.getPrice(),
      transactionId: this.haccp.haccp_transaction_id,
      haccpId: this.haccpId,
      userEmail: this.haccp.haccp_user_email,
    };
    this.paymentApiService.startTransaction(body).subscribe({
      next: (res) => {
        window.open(res.paymentUrl);
      },
      error: (err) => console.log(err),
    });
  }

  saveCompanyIfNotExistAlready(): void {
    let company = this.companies.find(
      (company) => company.company_name === this.haccp.haccp_company_name
    );

    if (!company) {
      let company: CompanyRequestModel = {
        company_name: this.haccp.haccp_unit_name,
        company_location: this.haccp.haccp_company_headquarters,
        company_user_id: +this.userId,
        company_archived: false,
        company_category: this.haccp.haccp_company_category,
        company_billing_name: this.haccp.haccp_billing_name,
        company_billing_address: this.haccp.haccp_billing_address,
        company_vat_number: this.haccp.haccp_company_vat_number,
      };

      this.companyApiService
        .create(company)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((res) => {
          if (res.company_id) {
            this.haccp.haccp_company_id = res.company_id;
            this.updateHaccpWithCompanyId();
          }
        });
    }
  }

  async updateHaccpWithCompanyId(): Promise<void> {
    if (this.haccpId) {
      this.haccpApiService
        .update(this.haccp, this.haccpId)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((res) => {});
    }
  }

  onCancel(): void {
    const title = 'Biztosan ki szeretnél lépni?';
    const text = 'Minden kitöltött adat elveszik.';
    this.sweetAlertPopupService.openConfirmPopup(title, text).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/home']);
      }
    });
  }
}
