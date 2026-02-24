import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  Eye,
  EyeOff,
  LucideAngularModule,
  SendHorizontal,
} from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './login.html',
})
export class Login {
  readonly Eye = Eye;
  readonly EyeOff = EyeOff;
  readonly SendHorizontal = SendHorizontal;
  private router = inject(Router);
  showPassword = false;

  handleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  handleLogin(event: Event): void {
    event.preventDefault();
    console.log('first');
    this.router.navigate(['/auth']);
  }
}
