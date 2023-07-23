import { AppRoutingModule } from 'src/app/app-routing.module';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-menu',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.scss'],
})
export class AuthMenuComponent {}
