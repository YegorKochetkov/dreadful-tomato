import { Route, RouterLink, RouterLinkActive } from '@angular/router';
import { PromoPageComponent } from './promo-page.component';
import { MoviesService } from 'src/app/services/movies/movies.service';

export const promoPageRoutes: Route[] = [
  {
    path: '',
    component: PromoPageComponent,
  },
];
