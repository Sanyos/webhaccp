import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EnumsApiService } from 'src/app/core/api/enums-api/enums-api.service';
import { EnumsModel } from 'src/app/core/model/enums.model';
import { ColdStorageProductEnum } from 'src/app/core/model/haccp.model';
import { SweetAlertPopupService } from 'src/app/core/services/sweet-alert-popup/sweet-alert-popup.service';

@Component({
  selector: 'app-haccp',
  templateUrl: './haccp.component.html',
  styleUrls: ['./haccp.component.scss'],
})
export class HaccpComponent implements OnInit {
  unsubscribe = new Subject<void>();
  haccpForm: FormGroup;
  coldStorageProductOptions: ColdStorageProductEnum;
  constructor(
    private readonly sweetAlertPopupService: SweetAlertPopupService,
    private readonly router: Router,
    private readonly enumsApiService: EnumsApiService
  ) {}

  ngOnInit(): void {
    this.getEnums();
  }

  getEnums(): void {
    this.enumsApiService
      .getSingleItem()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: EnumsModel) => {
        this.coldStorageProductOptions = res.ColdStorageProductEnum;
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
