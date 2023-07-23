import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FiltersComponent } from '../filters/filters.component';
import { AuthMenuComponent } from './header-auth-menu/auth-menu.component';
import { NavbarFiltersComponent } from './header-filters-button/navbar-filters.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { MainMenuComponent } from './header-main-menu/main-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    AuthMenuComponent,
    HeaderLogoComponent,
    MainMenuComponent,
    NavbarFiltersComponent,
    FiltersComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isRoot = false;

  constructor(private location: Location, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isRoot = this.location.path() === '';
    });
  }
}
