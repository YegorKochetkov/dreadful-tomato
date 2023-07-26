import { AppRoutingModule } from 'src/app/app-routing.module';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LogoComponent } from '../ui/logo/logo.component';

@Component({
  selector: 'app-logo-link',
  standalone: true,
  imports: [CommonModule, AppRoutingModule, LogoComponent],
  templateUrl: './logo-link.component.html',
  styleUrls: ['./logo-link.component.scss'],
})
export class LogoLinkComponent {}
