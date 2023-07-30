import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesService, POST } from 'src/app/services/movies/movies.service';
import { Movie } from 'src/app/services/movies/movies.service';

import { PromoCardComponent } from '../promo-card/promo-card.component';

@Component({
  selector: 'app-promo-page',
  standalone: true,
  imports: [CommonModule, PromoCardComponent],
  templateUrl: './promo-page.component.html',
  styleUrls: ['./promo-page.component.scss'],
})
export class PromoPageComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  promoMovie: Movie | undefined;
  promoSerial: Movie | undefined;

  ngOnInit(): void {
    this.getPromo();
  }

  getPromo() {
    this.moviesService.getMovies().subscribe((movies) => {
      this.promoMovie = movies.find((movie) => movie.title === POST.movie);
      this.promoSerial = movies.find((movie) => movie.title === POST.serial);
    });
  }
}
