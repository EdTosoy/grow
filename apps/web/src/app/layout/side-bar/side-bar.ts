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
    console.log('logout');
  }
  navItems = computed<SidebarNav>(() => {
    const role = 'ADMIN';
    const common: NavItem[] = [
      {
        title: 'Dashboard',
        url: `/${ROUTES.DASHBOARD}`,
        icon: House,
      },
    ];
    const preOnboarding: NavItem[] = [
      {
        title: 'Company ID',
        url: `/${ROUTES.COMPANY_ID}`,
        icon: IdCard,
      },
      {
        title: 'Metrobank',
        url: `/${ROUTES.METROBANK}`,
        icon: CreditCard,
      },
      {
        title: 'Uniform',
        url: `/${ROUTES.UNIFORM}`,
        icon: Shirt,
      },
      {
        title: 'Trainings',
        url: `/${ROUTES.TRAININGS}`,
        icon: Clapperboard,
      },
    ];
    const onboarding: NavItem[] = [
      {
        title: 'Touchpoints',
        url: `/${ROUTES.TOUCH_POINTS}`,
        icon: Handshake,
      },
    ];
    const adminSideNav: NavItem[] = [
      {
        title: 'Employees',
        url: `/${ROUTES.EMPLOYEES}`,
        icon: SquareUser,
      },
      {
        title: 'Organization',
        url: `/${ROUTES.ORGANIZATION}`,
        icon: Building,
      },
      {
        title: 'Reports',
        url: `/${ROUTES.REPORTS}`,
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
          common: [...common, ...preOnboarding, ...onboarding, ...adminSideNav],
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
