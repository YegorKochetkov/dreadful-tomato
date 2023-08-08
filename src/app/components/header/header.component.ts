import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

import { FiltersComponent } from '../filters/filters.component';
import { AuthMenuComponent } from './auth-menu/auth-menu.component';
import { FiltersButtonComponent } from './filters-button/filters-button.component';
import { LogoLinkComponent } from '../logo-link/logo-link.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    AuthMenuComponent,
    LogoLinkComponent,
    MainMenuComponent,
    FiltersButtonComponent,
    FiltersComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isRoot = false;
  isAuth = false;
  isFiltersDisplay = false;

  constructor(private router: Router) {}

  private ngUnsubscribe = new Subject<void>();

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isRoot = this.router.url === '/';
      this.isAuth =
        this.router.url === '/sign-in' || this.router.url === '/sign-up';
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleFiltersDisplay() {
    this.isFiltersDisplay = !this.isFiltersDisplay;
  }
}
