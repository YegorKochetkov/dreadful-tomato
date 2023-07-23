import { AppRoutingModule } from 'src/app/app-routing.module';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LogoComponent } from '../../ui/logo/logo.component';

@Component({
  selector: 'app-header-logo',
  standalone: true,
  imports: [CommonModule, AppRoutingModule, LogoComponent],
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.scss'],
})
export class HeaderLogoComponent {}
