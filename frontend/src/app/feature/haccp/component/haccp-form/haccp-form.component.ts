import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ColdStorageProductEnum,
  ProductPreparatoryEnum,
} from '../../../../core/model/haccp.model';

@Component({
  selector: 'app-haccp-form',
  templateUrl: './haccp-form.component.html',
  styleUrls: ['./haccp-form.component.scss'],
})
export class HaccpFormComponent implements OnInit {
  @Input() coldStorageProductOptions: ColdStorageProductEnum;
  @Input() productPreparatoryOptions: ProductPreparatoryEnum;
  @Output() haccpFormEvent: EventEmitter<FormGroup> = new EventEmitter();
  haccpForm: FormGroup;
  constructor() {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm(): void {
    this.haccpForm = new FormGroup({
      haccp_unit_name: new FormControl('', Validators.required),
      haccp_company_location: new FormControl('', Validators.required),
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
      haccp_dressing_room: new FormControl('', Validators.required),
      haccp_cold_products: new FormControl('', Validators.required),
      haccp_egg: new FormControl('', Validators.required),
      haccp_glass_cleaner: new FormControl('', Validators.required),
      haccp_surface_disinfectant: new FormControl('', Validators.required),
      haccp_other_chemical: new FormControl('', Validators.required),
      haccp_hand_disinfectant: new FormControl('', Validators.required),
      haccp_2phase_dishwashing_detergent: new FormControl(
        '',
        Validators.required
      ),
      haccp_general_disinfectant: new FormControl('', Validators.required),
      haccp_scale_remover: new FormControl('', Validators.required),
      haccp_degreaser: new FormControl('', Validators.required),
      haccp_factory_dishwasher: new FormControl('', Validators.required),
      haccp_consumer_dishwasher: new FormControl('', Validators.required),
      haccp_disposable_consumer_container: new FormControl(
        '',
        Validators.required
      ),
      haccp_dish_washing_up: new FormControl(''),
      haccp_have_haccp: new FormControl('', Validators.required),
      haccp_existing_haccp_date: new FormControl(''),
      haccp_pest_control: new FormControl('', Validators.required),
      haccp_food_waste_transport: new FormControl('', Validators.required),
      haccp_municipal_waste_dispose: new FormControl('', Validators.required),
      haccp_entrances: new FormControl('', Validators.required),
      haccp_route_intersects: new FormControl('', Validators.required),
      haccp_place_of_receipt: new FormControl('', Validators.required),
      haccp_water_supply: new FormControl('', Validators.required),
      haccp_sewage_drain: new FormControl('', Validators.required),
    });
  }
}
