import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-select-form-control',
  templateUrl: './select-form-control.component.html',
  styleUrls: ['./select-form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectFormControlComponent),
      multi: true,
    },
  ],
})
export class SelectFormControlComponent
  implements ControlValueAccessor, AfterViewInit
{
  @ViewChild('input') inputRef: ElementRef;
  @Input() label: string;
  @Input() formControl: FormControl = new FormControl();
  @Input() options: any;
  @Input() optional: boolean = false;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();

  private innerValue: any = '';
  disabled: boolean = false;
  constructor() {}
  ngAfterViewInit(): void {
    this.formControl.valueChanges.subscribe((controls) => {
      this.disabled = false;
      controls.forEach((control: string) => {
        if (control.includes('no')) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      });
      // check condition if the form control is RESET
      if (
        this.formControl?.value == '' ||
        this.formControl?.value == null ||
        this.formControl?.value == undefined
      ) {
        this.innerValue = '';
        //  this.inputRef.nativeElement.value = '';
      }
    });
  }

  onChange(e: Event, value: any) {
    //set changed value
    this.innerValue = value;
    // propagate value into form control using control value accessor interface
    this.propagateChange(this.innerValue);
    this.selectionChange.emit(value);
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
