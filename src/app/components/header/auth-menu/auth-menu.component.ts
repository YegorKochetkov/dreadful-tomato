import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.scss'],
})
export class AuthMenuComponent {}
