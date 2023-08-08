import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./components/promo-page/promo-page.routes').then(
        (m) => m.promoPageRoutes
      ),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./components/movies/movies.routes').then((m) => m.moviesRoutes),
  },
  {
    path: 'series',
    loadChildren: () =>
      import('./components/movies/movies.routes').then((m) => m.moviesRoutes),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./components/sign-in/sign-in.routes').then((m) => m.signInRoutes),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./components/sign-up/sign-up.routes').then((m) => m.signUpRoutes),
  },
];
