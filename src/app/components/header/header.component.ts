import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthMenuComponent } from './auth-menu/auth-menu.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NavbarFiltersComponent } from './navbar-filters/navbar-filters.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    AuthMenuComponent,
    HeaderLogoComponent,
    MainMenuComponent,
    NavbarFiltersComponent,
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
