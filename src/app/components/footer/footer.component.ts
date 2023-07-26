import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoLinkComponent } from '../logo-link/logo-link.component';

const menuItemsFromServer = [
  { label: 'Home', path: '#' },
  { label: 'Terms of use', path: '#' },
  { label: 'Legal notices', path: '#' },
  { label: 'Help', path: '#' },
  { label: 'Manage accounts', path: '#' },
];

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LogoLinkComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  menuItems = menuItemsFromServer;
}
