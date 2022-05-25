import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserApiService } from '../../api/user-api/user-api.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardService implements CanActivate {
  constructor(public router: Router, public userApiService: UserApiService) {
    this.getUserRole();
  }
  role: string = '';
  getUserRole(): void {
    this.userApiService.personLoggedInObj.subscribe((res) => {
      if (res) {
        this.role = res.user_role;
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const role = this.role;
    const roles = route.data.expected;
    const isAdmin = role && roles.includes(role);
    if (!isAdmin) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
