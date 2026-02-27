import { Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  Clapperboard,
  CreditCard,
  Handshake,
  House,
  IdCard,
  LucideIconData,
  Shirt,
  ArrowBigLeftDash,
  LucideAngularModule,
  SquareUser,
  Building,
  Notebook,
} from 'lucide-angular';
import { ROUTES } from '../../routes';

interface NavItem {
  title: string;
  url: string;
  icon: LucideIconData;
}

interface SidebarNav {
  common: NavItem[];
  preOnboarding: NavItem[];
  onboarding: NavItem[];
}

@Component({
  selector: 'app-side-bar',
  standalone: true,
  templateUrl: './side-bar.html',
  imports: [LucideAngularModule, RouterModule],
})
export class SideBar {
  readonly ArrowBigLeftDash = ArrowBigLeftDash;
  logout() {
    // TODO:
  }
  navItems = computed<SidebarNav>(() => {
    const role = 'ADMIN';
    const common: NavItem[] = [
      {
        title: 'Dashboard',
        url: `/${ROUTES.USER.DASHBOARD}`,
        icon: House,
      },
    ];
    const preOnboarding: NavItem[] = [
      {
        title: 'Company ID',
        url: `/${ROUTES.USER.COMPANY_ID}`,
        icon: IdCard,
      },
      {
        title: 'Metrobank',
        url: `/${ROUTES.USER.METROBANK}`,
        icon: CreditCard,
      },
      {
        title: 'Uniform',
        url: `/${ROUTES.USER.UNIFORM}`,
        icon: Shirt,
      },
      {
        title: 'Trainings',
        url: `/${ROUTES.USER.TRAININGS}`,
        icon: Clapperboard,
      },
    ];
    const onboarding: NavItem[] = [
      {
        title: 'Touchpoints',
        url: `/${ROUTES.USER.TOUCH_POINTS}`,
        icon: Handshake,
      },
    ];
    const adminSideNav: NavItem[] = [
      {
        title: 'Dashboard',
        url: `/${ROUTES.ADMIN.ROOT}/${ROUTES.ADMIN.DASHBOARD}`,
        icon: House,
      },
      {
        title: 'Company ID',
        url: `/${ROUTES.ADMIN.ROOT}/${ROUTES.ADMIN.COMPANY_ID}`,
        icon: IdCard,
      },

      {
        title: 'Metrobank',
        url: `/${ROUTES.ADMIN.ROOT}/${ROUTES.ADMIN.METROBANK}`,
        icon: CreditCard,
      },
      {
        title: 'Uniform',
        url: `/${ROUTES.ADMIN.ROOT}/${ROUTES.ADMIN.UNIFORM}`,
        icon: Shirt,
      },
      {
        title: 'Trainings',
        url: `/${ROUTES.ADMIN.ROOT}/${ROUTES.ADMIN.TRAININGS}`,
        icon: Clapperboard,
      },
      {
        title: 'Touchpoints',
        url: `/${ROUTES.ADMIN.ROOT}/${ROUTES.ADMIN.TOUCH_POINTS}`,
        icon: Handshake,
      },
      {
        title: 'Employees',
        url: `/${ROUTES.ADMIN.ROOT}/${ROUTES.ADMIN.EMPLOYEES}`,
        icon: SquareUser,
      },
      {
        title: 'Organization',
        url: `/${ROUTES.ADMIN.ROOT}/${ROUTES.ADMIN.ORGANIZATION}`,
        icon: Building,
      },
      {
        title: 'Reports',
        url: `/${ROUTES.ADMIN.ROOT}/${ROUTES.ADMIN.REPORTS}`,
        icon: Notebook,
      },
    ];

    switch (role) {
      // case 'USER':
      //   return {
      //     common,
      //     preOnboarding,
      //     onboarding,
      //   };

      case 'ADMIN':
        return {
          common: [...adminSideNav],
          preOnboarding: [],
          onboarding: [],
        };

      default:
        return {
          common,
          preOnboarding: [],
          onboarding: [],
        };
    }
  });
}
