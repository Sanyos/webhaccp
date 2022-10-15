import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-pub-haccp-form-third',
  templateUrl: './pub-haccp-form-third.component.html',
  styleUrls: ['./pub-haccp-form-third.component.scss'],
})
export class PubHaccpFormThirdComponent implements OnInit {
  @Input() sewageDrainOptions: SewageDrainEnum;
  @Input() waterSupplyOptions: WaterSupplyEnum;
  @Input() entranceOptions: EntranceEnum;
  @Input() foodWasteTransportOptions: FoodWasteTransportEnum;
  @Input() pestControlOptions: PestControlEnum;
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
      haccp_have_haccp: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_existing_haccp_date: new FormControl('', Validators.maxLength(255)),
      haccp_pest_control: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_food_waste_transport: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_municipal_waste_dispose: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_entrances: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_route_intersects: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_place_of_receipt: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_water_supply: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_sewage_drain: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
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
    { key: true, value: 'Igen' },
    { key: false, value: 'Nem' },
  ];

  routeIntersectsOptions = [
    { key: true, value: 'Igen, ezért időben elkülönítve mozognak a termékek' },
    { key: false, value: 'Nem keresztezik egymást' },
  ];
}
