import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import {
  MoviesService,
  PROMO_MOVIES,
} from 'src/app/services/movies/movies.service';
import { Movie } from 'src/app/services/movies/movies.service';

import { PromoCardComponent } from '../ui/promo-card/promo-card.component';

@Component({
  selector: 'app-promo-page',
  standalone: true,
  imports: [CommonModule, AppRoutingModule, PromoCardComponent],
  templateUrl: './promo-page.component.html',
  styleUrls: ['./promo-page.component.scss'],
})
export class PromoPageComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movie: Movie | undefined;
  serial: Movie | undefined;

  ngOnInit(): void {
    this.getPromo();
  }

  getPromo() {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movie = movies.find((movie) => movie.title === PROMO_MOVIES.movie);
      this.serial = movies.find((movie) => movie.title === PROMO_MOVIES.serial);
    });
  }
}
