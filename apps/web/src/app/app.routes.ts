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
        redirectTo: ROUTES.USER.DASHBOARD,
        pathMatch: 'full',
      },
      {
        path: ROUTES.USER.DASHBOARD,
        loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: ROUTES.USER.COMPANY_ID,
        loadComponent: () => import('./pages/company-id/company-id').then((m) => m.CompanyId),
      },
      {
        path: ROUTES.USER.METROBANK,
        loadComponent: () => import('./pages/metrobank/metrobank').then((m) => m.Metrobank),
      },
      {
        path: ROUTES.USER.UNIFORM,
        loadComponent: () => import('./pages/uniform/uniform').then((m) => m.Uniform),
      },
      {
        path: ROUTES.USER.TRAININGS,
        loadComponent: () => import('./pages/trainings/trainings').then((m) => m.Trainings),
      },
      {
        path: ROUTES.USER.TOUCH_POINTS,
        loadComponent: () => import('./pages/touchpoints/touchpoints').then((m) => m.Touchpoints),
      },
      {
        path: ROUTES.ADMIN.ROOT,
        children: [
          {
            path: ROUTES.ADMIN.COMPANY_ID,
            loadComponent: () =>
              import('./pages/admin-company-id/admin-company-id').then((m) => m.AdminCompanyIdPage),
          },
          {
            path: ROUTES.ADMIN.METROBANK,
            loadComponent: () =>
              import('./pages/admin-metrobank/admin-metrobank').then((m) => m.AdminMetrobank),
          },
          {
            path: ROUTES.ADMIN.UNIFORM,
            loadComponent: () =>
              import('./pages/admin-uniform/admin-uniform').then((m) => m.AdminUniform),
          },
          {
            path: ROUTES.ADMIN.TRAININGS,
            loadComponent: () =>
              import('./pages/admin-trainings/admin-trainings').then((m) => m.AdminTrainings),
          },
          {
            path: ROUTES.ADMIN.TOUCH_POINTS,
            loadComponent: () =>
              import('./pages/admin-touchpoints/admin-touchpoints').then((m) => m.AdminTouchpoints),
          },
          {
            path: ROUTES.ADMIN.EMPLOYEES,
            loadComponent: () => import('./pages/employees/employees').then((m) => m.Employees),
          },
          {
            path: ROUTES.ADMIN.ORGANIZATION,
            loadComponent: () =>
              import('./pages/organization/organization').then((m) => m.Organization),
          },
          {
            path: ROUTES.ADMIN.REPORTS,
            loadComponent: () => import('./pages/reports/reports').then((m) => m.Reports),
          },
        ],
      },
    ],
  },
];
