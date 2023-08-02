import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

import { combineLatest } from 'rxjs';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

import { Movie, MoviesService } from 'src/app/services/movies/movies.service';
import { MovieCardComponent } from '../ui/movie-card/movie-card.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, RouterModule, PaginatorModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(
    private _moviesService: MoviesService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  movies: Movie[] = [];
  moviesToDisplayOnPage: Movie[] = [];
  programType: string | undefined;

  totalPages: number = 0;
  currentPage: number = 1;
  perPage: number = 10;
  pagesCount: number = 0;

  url$ = this._activatedRoute.url;
  params$ = this._activatedRoute.queryParams;
  movies$ = this._moviesService.getMovies();

  ngOnInit(): void {
    combineLatest([this.url$, this.params$, this.movies$]).subscribe(
      ([url, params, movies]) => {
        this.programType = url[0].path;
        this.currentPage = Number(params['page']) - 1 || 0;
        this.perPage = Number(params['perPage']) || 10;

        this.movies = movies.filter(
          (movie) => movie.programType === this.programType
        );

        this.totalPages = this.movies.length;
        this.pagesCount = Math.ceil(this.totalPages / this.perPage);

        if (this.currentPage > this.pagesCount) {
          this.currentPage = this.pagesCount;
        }

        if (this.currentPage < 0) {
          this.currentPage = 0;

          this.router.navigate([], {
            relativeTo: this._activatedRoute,
            queryParams: { page: this.currentPage + 1 },
            queryParamsHandling: 'merge',
          });
        }

        this.moviesToDisplayOnPage = this.paginate(
          this.currentPage,
          this.perPage
        );
      }
    );
  }

  onPageChange(paginatorState: PaginatorState) {
    const nextPage =
      paginatorState.page === undefined ? 1 : paginatorState.page + 1;

    this.router.navigate(['/' + this.programType], {
      queryParams: { page: nextPage.toString(), perPage: this.perPage },
    });
  }

  private paginate(current: number, perPage: number) {
    const start = current * perPage;
    const end = start + perPage;

    return [...this.movies.slice(start, end)];
  }
}
