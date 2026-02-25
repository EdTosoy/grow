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
} from 'lucide-angular';

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
    const role = 'USER';

    const common: NavItem[] = [
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: House,
      },
    ];

    switch (role) {
      case 'USER':
        return {
          common,
          preOnboarding: [
            {
              title: 'Company ID',
              url: '/company-id',
              icon: IdCard,
            },
            {
              title: 'Metrobank',
              url: '/metrobank',
              icon: CreditCard,
            },
            {
              title: 'Uniform',
              url: '/uniform',
              icon: Shirt,
            },
            {
              title: 'Trainings',
              url: '/trainings',
              icon: Clapperboard,
            },
          ],
          onboarding: [
            {
              title: 'Touchpoints',
              url: '/touch-points',
              icon: Handshake,
            },
          ],
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
