import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SweetAlertPopupService } from 'src/app/core/services/sweet-alert-popup/sweet-alert-popup.service';

@Component({
  selector: 'app-haccp',
  templateUrl: './haccp.component.html',
  styleUrls: ['./haccp.component.scss'],
})
export class HaccpComponent implements OnInit {
  haccpForm: FormGroup;
  constructor(
    private readonly sweetAlertPopupService: SweetAlertPopupService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

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
