import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { MoviesService, POST } from 'src/app/services/movies/movies.service';
import { Movie } from 'src/app/services/movies/movies.service';

import { PromoCardComponent } from '../promo-card/promo-card.component';

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
      this.movie = movies.find((movie) => movie.title === POST.movie);
      this.serial = movies.find((movie) => movie.title === POST.serial);
    });
  }
}
