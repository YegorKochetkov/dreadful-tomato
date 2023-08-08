import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

import { Subject, combineLatest, takeUntil } from 'rxjs';
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
export class MoviesComponent implements OnInit, OnDestroy {
  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  private ngUnsubscribe = new Subject<void>();

  movies: Movie[] = [];
  moviesToDisplayOnPage: Movie[] = [];
  programType: string | undefined;

  totalPages: number = 0;
  currentPage: number = 1;
  perPage: number = 10;
  pagesCount: number = 0;

  url$ = this.activatedRoute.url;
  params$ = this.activatedRoute.queryParams;
  movies$ = this.moviesService.getMovies();
  filters$ = this.moviesService.filters$;

  ngOnInit() {
    combineLatest([this.url$, this.params$, this.movies$, this.filters$])
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(([url, params, movies, filters]) => {
        this.programType = url[0].path;
        this.currentPage = Number(params['page']) - 1 || 0;
        this.perPage = Number(params['perPage']) || 10;

        this.movies = this.filterByProgramType(movies, this.programType);
        this.movies = this.filterByQuery(this.movies, filters.searchFilter);
        this.movies = this.filterByYear(this.movies, filters.yearFilter);

        this.totalPages = this.movies.length;
        this.pagesCount = Math.ceil(this.totalPages / this.perPage);

        if (this.currentPage > this.pagesCount) {
          this.currentPage = this.pagesCount;
        }

        if (this.currentPage < 0) {
          this.currentPage = 0;

          this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { page: this.currentPage + 1 },
            queryParamsHandling: 'merge',
          });
        }

        this.moviesToDisplayOnPage = this.paginate(
          this.currentPage,
          this.perPage
        );
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
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

  private filterByProgramType(
    movies: Movie[],
    programType: string | undefined
  ) {
    if (!programType) {
      return movies;
    }

    return movies.filter((movie) => movie.programType === programType);
  }

  private filterByQuery(movies: Movie[], filter: string | null) {
    if (!filter) return movies;

    return movies.filter((movie) => {
      const isDescriptionMatch = movie.description
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());

      const isTitleMatch = movie.title
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());

      return isDescriptionMatch || isTitleMatch;
    });
  }

  private filterByYear(movies: Movie[], year: number | null) {
    if (!year) return movies;

    return movies.filter((movie) => movie.releaseYear === year);
  }
}
