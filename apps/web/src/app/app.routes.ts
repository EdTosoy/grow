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
      {
        path: ROUTES.UNIFORM,
        loadComponent: () => import('./pages/uniform/uniform').then((m) => m.Uniform),
      },
      {
        path: ROUTES.TRAININGS,
        loadComponent: () => import('./pages/trainings/trainings').then((m) => m.Trainings),
      },
      {
        path: ROUTES.TOUCH_POINTS,
        loadComponent: () => import('./pages/touchpoints/touchpoints').then((m) => m.Touchpoints),
      },
      {
        path: ROUTES.EMPLOYEES,
        loadComponent: () => import('./pages/employees/employees').then((m) => m.Employees),
      },
      {
        path: ROUTES.ORGANIZATION,
        loadComponent: () =>
          import('./pages/organization/organization').then((m) => m.Organization),
      },
      {
        path: ROUTES.REPORTS,
        loadComponent: () => import('./pages/reports/reports').then((m) => m.Reports),
      },
    ],
  },
];
