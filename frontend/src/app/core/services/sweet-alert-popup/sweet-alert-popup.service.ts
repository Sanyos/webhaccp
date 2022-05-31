import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class SweetAlertPopupService {
  constructor() {}

  openConfirmPopup(title: string, text?: string) {
    return Swal.fire({
      title: title,
      text: text ? text : '',
      icon: 'question',
      showCancelButton: true,
      cancelButtonColor: '#607D8B',
      confirmButtonColor: '#0097a7',
      confirmButtonText: 'Igen',
      cancelButtonText: 'Mégse',
      showClass: {
        popup: '',
        backdrop: 'swal2-backdrop-show',
        icon: 'swal2-icon-show',
      },
    });
  }

  openSuccessPopup(title: string, text?: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonColor: '#0097a7',
    });
  }
}
