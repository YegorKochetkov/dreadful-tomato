import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../ui/logo/logo.component';

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
  imports: [CommonModule, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  menuItems = menuItemsFromServer;
}
