import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { LogoComponent } from '../ui/logo/logo.component';

@Component({
  selector: 'app-logo-link',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, LogoComponent],
  templateUrl: './logo-link.component.html',
  styleUrls: ['./logo-link.component.scss'],
})
export class LogoLinkComponent {}
