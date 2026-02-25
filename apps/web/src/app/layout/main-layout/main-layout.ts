import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideBar } from '../side-bar/side-bar';
import { RouterOutlet } from '@angular/router';
import { Bell, CircleQuestionMark, LucideAngularModule } from 'lucide-angular';
import { CompanyLogo } from '@grow/shared-ui';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SideBar, LucideAngularModule, RouterOutlet, CompanyLogo],
  templateUrl: './main-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout {
  readonly Bell = Bell;
  readonly CircleQuestionMark = CircleQuestionMark;
}
