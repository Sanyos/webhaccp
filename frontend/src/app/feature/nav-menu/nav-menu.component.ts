import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';

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
export class NavMenuComponent implements OnInit {
  loggedIn: boolean;
  navItems: any[];
  isHamburguer: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setNavItems();
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
        title: 'Online készítő',
        route: '/recipes',
      },
    ];
  }

  signOut() {
    /*     this.authService.logout().subscribe(
      () => {},
      (err) => err,
      () => this.router.navigate(['/home'])
    ); */
    this.router.navigate(['/home']);
  }
}
