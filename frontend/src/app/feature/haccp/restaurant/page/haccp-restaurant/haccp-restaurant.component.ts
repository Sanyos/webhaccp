import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';
import {
  ColdStorageProductEnum,
  ProductPreparatoryEnum,
  EggEnum,
  DeliveryMethodEnum,
  StorageEnum,
  RefigratorEnum,
  HaccpModel,
  DishToWashEnum,
  DishwasherEnum,
  EntranceEnum,
  FoodWasteTransportEnum,
  PestControlEnum,
  SewageDrainEnum,
  WaterSupplyEnum,
  IngredientEnum,
} from 'src/app/core/model/haccp.model';

@Component({
  selector: 'app-haccp-restaurant',
  templateUrl: './haccp-restaurant.component.html',
  styleUrls: ['./haccp-restaurant.component.scss'],
})
export class HaccpRestaurantComponent {
  @Input() ingredientsOptions: IngredientEnum;
  @Input() coldStorageProductOptions: ColdStorageProductEnum;
  @Input() productPreparatoryOptions: ProductPreparatoryEnum;
  @Input() eggOptions: EggEnum;
  @Input() deliveryMethodOptions: DeliveryMethodEnum;
  @Input() storageOptions: StorageEnum;
  @Input() refigratorOptions: RefigratorEnum;
  @Input() haccpCategory: CompanyCategoryTypes | null;
  @Input() sewageDrainOptions: SewageDrainEnum;
  @Input() waterSupplyOptions: WaterSupplyEnum;
  @Input() entranceOptions: EntranceEnum;
  @Input() foodWasteTransportOptions: FoodWasteTransportEnum;
  @Input() pestControlOptions: PestControlEnum;
  @Input() dishToWashOptions: DishToWashEnum;
  @Input() dishwasherOptions: DishwasherEnum;
  @Output() haccpEvent: EventEmitter<HaccpModel> = new EventEmitter();
  @Output() saveEvent: EventEmitter<HaccpModel> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<HaccpModel> = new EventEmitter();

  haccpForm: FormGroup;
  secondHaccpForm: FormGroup;
  thirdHaccpForm: FormGroup;

  aszfChecked: boolean = false;
  aszfError: boolean = false;
  otpChecked: boolean = false;
  otpError: boolean = false;

  constructor() {}

  firstHaccpFormEvent(form: FormGroup): void {
    this.haccpForm = form;
  }

  secondHaccpFormEvent(form: FormGroup): void {
    this.secondHaccpForm = form;
  }

  thirdHaccpFormEvent(form: FormGroup): void {
    this.thirdHaccpForm = form;
  }

  onSave(): void {
    this.aszfChecked ? (this.aszfError = false) : (this.aszfError = true);
    this.otpChecked ? (this.otpError = false) : (this.otpError = true);
    if (this.aszfChecked && this.otpChecked) {
      const arr = [
        this.haccpForm.value,
        this.secondHaccpForm.value,
        this.thirdHaccpForm.value,
      ];
      const haccp: HaccpModel = Object.assign({}, ...arr);
      haccp.haccp_aszf_checked = true;
      haccp.haccp_privacy_policy_checked = true;
      haccp.haccp_otp_checked = true;
      this.haccpEvent.emit(haccp);
      this.saveEvent.emit();
    } else {
      this.aszfChecked ? (this.aszfError = false) : (this.aszfError = true);
      this.otpChecked ? (this.otpError = false) : (this.otpError = true);
    }
  }

  onCancel(): void {
    this.cancelEvent.emit();
  }

  onOpen(e: Event, type: string): void {
    console.log(type);
    e.preventDefault();
    e.stopPropagation();
    let path;
    type === 'aszf'
      ? (path = '../../../../../../assets/aszf.pdf')
      : (path = '../../../../../../assets/adatkezelesi_tajekoztato.pdf');
    window.open(path, '_blank');
  }
}
