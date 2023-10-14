import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';
import { ActivatedRoute } from '@angular/router';
import { pluck, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-reg-confirm',
  templateUrl: './reg-confirm.component.html',
  styleUrls: ['./reg-confirm.component.scss'],
})
export class RegConfirmComponent implements OnInit, OnDestroy {
  text: string;
  userIdParam$ = this.activatedRoute.params.pipe(pluck('id'));
  unsubscribe = new Subject<void>();
  constructor(
    private readonly userApiService: UserApiService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userIdParam$.pipe(takeUntil(this.unsubscribe)).subscribe((res) => {
      this.confimRegistration(res);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  confimRegistration(userId: number): void {
    const body = {
      user_reg_active: true,
    };
    this.userApiService
      .update(body, `confirm-reg/${userId}`)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        if (res) {
          this.text = 'Regisztrációját sikeresen megerősítette!';
        }
      });
  }
}
