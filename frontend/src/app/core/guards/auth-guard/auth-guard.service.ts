import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserApiService } from '../../api/user-api/user-api.service';
import { SweetAlertPopupService } from '../../services/sweet-alert-popup/sweet-alert-popup.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, public userApiService: UserApiService, private sweetAlertPopupService: SweetAlertPopupService) {}

  canActivate() {
    if (!this.userApiService.isAuthenticated()) {
      this.sweetAlertPopupService.openInfoPopup(
        'A funkció használatához jelentkezz be!', 'Amennyiben még nem rendelkezel felhasználói fiókkal, kérjük regisztrálj!'
      );
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
