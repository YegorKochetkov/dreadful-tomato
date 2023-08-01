import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-promo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.scss'],
})
export class PromoCardComponent {
  @Input() movie: Movie | undefined;
}
