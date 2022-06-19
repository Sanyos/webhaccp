import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';
import {
  ColdStorageProductEnum,
  DeliveryMethodEnum,
  EggEnum,
  ProductPreparatoryEnum,
  RefigratorEnum,
  StorageEnum,
} from '../../../../core/model/haccp.model';

@Component({
  selector: 'app-haccp-form',
  templateUrl: './haccp-form.component.html',
  styleUrls: ['./haccp-form.component.scss'],
})
export class HaccpFormComponent implements OnInit {
  @Input() haccpCategory: CompanyCategoryTypes | null;
  @Input() coldStorageProductOptions: ColdStorageProductEnum;
  @Input() productPreparatoryOptions: ProductPreparatoryEnum;
  @Input() eggOptions: EggEnum;
  @Input() deliveryMethodOptions: DeliveryMethodEnum;
  @Input() storageOptions: StorageEnum;
  @Input() refigratorOptions: RefigratorEnum;
  @Output() haccpFormEvent: EventEmitter<FormGroup> = new EventEmitter();
  haccpForm: FormGroup;

  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
    this.haccpFormEvent.emit(this.haccpForm);
  }

  createForm(): void {
    this.haccpForm = new FormGroup({
      haccp_supply: new FormControl('', Validators.required),
      haccp_products_require_cold_storage: new FormControl(
        '',
        Validators.required
      ),
      haccp_require_keeping_warm: new FormControl('', Validators.required),
      haccp_preparatory: new FormControl('', Validators.required),
      haccp_storages: new FormControl('', Validators.required),
      haccp_refrigerator: new FormControl('', Validators.required),
      haccp_delivery: new FormControl('', Validators.required),
      haccp_delivery_methods: new FormControl(''),
      haccp_dressing_room: new FormControl('', Validators.required),
      haccp_cold_products: new FormControl('', Validators.required),
      haccp_egg: new FormControl('', Validators.required),
    });
  }
}
