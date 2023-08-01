import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

export type Movie = {
  title: string;
  description: string;
  programType: string;
  releaseYear: number;
  images: {
    posterArt: {
      url: string;
      width: number;
      height: number;
    };
  };
};

type ApiResponse = {
  total: number;
  entries: Movie[];
};

// It should be gotten from server
export const PROMO_MOVIES = {
  movie: 'Avengers: Endgame',
  serial: 'Breaking Bad',
};

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  private moviesUrl =
    'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json';

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.debug(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<ApiResponse>(this.moviesUrl).pipe(
      map(({ entries }) => entries),
      // tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Movie[]>('getMovies', []))
    );
  }
}
