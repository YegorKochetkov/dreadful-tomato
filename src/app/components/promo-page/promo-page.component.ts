import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Subject, takeUntil } from 'rxjs';

import {
  MoviesService,
  PROMO_MOVIES,
} from 'src/app/services/movies/movies.service';
import { Movie } from 'src/app/services/movies/movies.service';
import { PromoCardComponent } from '../ui/promo-card/promo-card.component';

@Component({
  selector: 'app-promo-page',
  standalone: true,
  imports: [CommonModule, PromoCardComponent, RouterLink, RouterLinkActive],
  templateUrl: './promo-page.component.html',
  styleUrls: ['./promo-page.component.scss'],
})
export class PromoPageComponent implements OnInit, OnDestroy {
  constructor(private moviesService: MoviesService) {}

  private ngUnsubscribe = new Subject<void>();

  movie: Movie | undefined;
  serial: Movie | undefined;

  ngOnInit() {
    this.getPromo();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getPromo() {
    this.moviesService
      .getMovies()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((movies) => {
        this.movie = movies.find((movie) => movie.title === PROMO_MOVIES.movie);
        this.serial = movies.find(
          (movie) => movie.title === PROMO_MOVIES.serial
        );
      });
  }
}
