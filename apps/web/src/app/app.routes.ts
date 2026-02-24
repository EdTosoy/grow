import { Route } from '@angular/router';
import { Login } from './pages/login';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    component: Login,
  },
];
