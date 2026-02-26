import { Route } from '@angular/router';
import { ROUTES } from './routes';

export const appRoutes: Route[] = [
  {
    path: ROUTES.AUTH,
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },

  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout').then((m) => m.MainLayout),
    children: [
      {
        path: '',
        redirectTo: ROUTES.DASHBOARD,
        pathMatch: 'full',
      },
      {
        path: ROUTES.DASHBOARD,
        loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: ROUTES.COMPANY_ID,
        loadComponent: () => import('./pages/company-id/company-id').then((m) => m.CompanyId),
      },
      {
        path: ROUTES.METROBANK,
        loadComponent: () => import('./pages/metrobank/metrobank').then((m) => m.Metrobank),
      },
    ],
  },
];
