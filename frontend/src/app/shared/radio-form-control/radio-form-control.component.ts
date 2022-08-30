import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlName,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { SweetAlertPopupService } from 'src/app/core/services/sweet-alert-popup/sweet-alert-popup.service';

@Component({
  selector: 'app-radio-form-control',
  templateUrl: './radio-form-control.component.html',
  styleUrls: ['./radio-form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioFormControlComponent),
      multi: true,
    },
  ],
})
export class RadioFormControlComponent
  implements ControlValueAccessor, AfterViewInit
{
  @ViewChild('input') inputRef: ElementRef;
  @Input() label: string;
  @Input() formControl: FormControl = new FormControl();
  @Input() options: any;
  @Input() optional: boolean = false;
  @Input() infoIcon: boolean = false;
  @Input() infoText: string = '';
  private innerValue: any = '';

  constructor(
    private readonly sweetAlertPopupService: SweetAlertPopupService
  ) {}

  ngAfterViewInit(): void {
    this.formControl.valueChanges.subscribe(() => {
      // check condition if the form control is RESET
      if (
        this.formControl.value == '' ||
        this.formControl.value == null ||
        this.formControl.value == undefined
      ) {
        this.innerValue = '';
        this.inputRef.nativeElement.value = '';
      }
    });
  }

  onOpenInfo() {
    this.sweetAlertPopupService.openInfoPopup('Súgó', this.infoText);
  }

  onChange(e: Event, value: any) {
    //set changed value
    this.innerValue = value;
    // propagate value into form control using control value accessor interface
    this.propagateChange(this.innerValue);
  }

  //get accessor
  get value(): any {
    return this.innerValue;
  }

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
    }
  }

  //propagate changes into the custom form control
  propagateChange = (_: any) => {};

  writeValue(value: any) {
    this.innerValue = value;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {}
}
