import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/promo-page/promo-page.component').then(
        (m) => m.PromoPageComponent
      ),
  },
  {
    path: 'movies',
    loadComponent: () =>
      import('./components/movies/movies.component').then(
        (m) => m.MoviesComponent
      ),
  },
  {
    path: 'series',
    loadComponent: () =>
      import('./components/movies/movies.component').then(
        (m) => m.MoviesComponent
      ),
  },
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./components/sign-in/sign-in.component').then(
        (m) => m.SignInComponent
      ),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./components/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
