import { AppRoutingModule } from 'src/app/app-routing.module';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {}
