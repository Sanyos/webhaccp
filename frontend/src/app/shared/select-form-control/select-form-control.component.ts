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
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OnDestroy } from '@angular/core';

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
  implements ControlValueAccessor, AfterViewInit, OnDestroy
{
  @ViewChild('input') inputRef: ElementRef;
  @Input() label: string;
  @Input() formControl: FormControl = new FormControl();
  @Input() options: any;
  @Input() optional: boolean = false;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();
  unsubscribe = new Subject<void>();
  private innerValue: any = '';
  disabled: boolean = false;
  constructor() {}
  ngAfterViewInit(): void {
    this.formControl.valueChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((controls) => {
        this.disabled = false;
        if (controls) {
          controls.forEach((control: string) => {
            if (control && control.includes('no')) {
              if (controls.length > 1) {
                this.formControl.patchValue([controls[controls.length - 1]]);
              }
              this.disabled = true;
            } else {
              this.disabled = false;
            }
          });
        }
        if (
          this.formControl?.value == '' ||
          this.formControl?.value == null ||
          this.formControl?.value == undefined
        ) {
          this.innerValue = '';
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onChange(e: Event, value: any) {
    this.innerValue = value;
    this.propagateChange(this.innerValue);
    this.selectionChange.emit(value);
  }

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
    }
  }

  propagateChange = (_: any) => {};

  writeValue(value: any) {
    this.innerValue = value;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {}
}
