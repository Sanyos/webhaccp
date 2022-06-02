import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EnumsApiService } from 'src/app/core/api/enums-api/enums-api.service';
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
  unsubscribe = new Subject<void>();
  haccpForm: FormGroup;
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
  constructor(
    private readonly sweetAlertPopupService: SweetAlertPopupService,
    private readonly router: Router,
    private readonly enumsApiService: EnumsApiService
  ) {}

  ngOnInit(): void {
    this.getEnums();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
      });
  }

  haccpFormEvent(form: FormGroup): void {
    this.haccpForm = form;
  }

  onSave() {
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
