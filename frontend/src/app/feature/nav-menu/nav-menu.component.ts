import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { UserApiService } from 'src/app/core/api/user-api/user-api.service';
import { UserResponseModel } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state(
        'topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          margin: '11px',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      state(
        'bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          margin: '11px',
        })
      ),
      transition('* => *', [animate('0.2s')]),
    ]),
  ],
})
export class NavMenuComponent implements OnInit, AfterViewInit {
  loggedIn: boolean = true;
  adminLoggedIn: boolean;
  navItems: any[];
  isHamburguer: boolean = true;
  isSmallScreen: boolean = false;
  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private userApiService: UserApiService
  ) {}

  ngOnInit(): void {
    this.setNavItems();

    this.smallScreen().subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.isLoggedIn();
  }

  onClick() {
    this.isHamburguer = !this.isHamburguer;
    let element: HTMLElement = document.getElementsByClassName(
      'navbar-toggler'
    )[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') == 'true') {
      element.click();
    }
  }

  setNavItems() {
    this.navItems = [
      {
        title: 'Főoldal',
        route: '/home',
      },
      {
        title: 'Online HACCP',
        route: '/haccp',
      },
    ];
  }

  isLoggedIn(): void {
    this.userApiService.personLoggedInObj.subscribe(
      (res: UserResponseModel) => {
        if (res.accessToken !== null && this.userApiService.isAuthenticated()) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }
    );
  }

  signOut(): void {
    this.userApiService.logout();
    this.router.navigate(['/login']);
    this.loggedIn = false;
  }

  smallScreen() {
    return this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ]);
  }
}
