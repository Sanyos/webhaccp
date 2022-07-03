import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyCategoryTypes } from 'src/app/core/enum/company-category-type.enum';
import {
  DishToWashEnum,
  DishwasherEnum,
  EntranceEnum,
  FoodWasteTransportEnum,
  PestControlEnum,
  SewageDrainEnum,
  WaterSupplyEnum,
} from 'src/app/core/model/haccp.model';

@Component({
  selector: 'app-haccp-form-third',
  templateUrl: './haccp-form-third.component.html',
  styleUrls: ['./haccp-form-third.component.scss'],
})
export class HaccpFormThirdComponent implements OnInit {
  @Input() sewageDrainOptions: SewageDrainEnum;
  @Input() waterSupplyOptions: WaterSupplyEnum;
  @Input() entranceOptions: EntranceEnum;
  @Input() foodWasteTransportOptions: FoodWasteTransportEnum;
  @Input() pestControlOptions: PestControlEnum;
  @Input() dishToWashOptions: DishToWashEnum;
  @Input() dishwasherOptions: DishwasherEnum;
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
      haccp_date: new FormControl(this.formatDate(new Date())),
    });
  }

  formatDate(date: Date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  radioOptions = [
    { key: true, value: 'Van' },
    { key: false, value: 'Nincs' },
  ];

  routeIntersectsOptions = [
    { key: true, value: 'Igen, időben elkülönül' },
    { key: false, value: 'Nincs' },
  ];
}
