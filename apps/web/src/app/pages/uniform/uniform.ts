import { Component, signal } from '@angular/core';
import { Shirt, ChevronDown, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-uniform',
  imports: [LucideAngularModule],
  templateUrl: './uniform.html',
  styleUrl: './uniform.css',
})
export class Uniform {
  readonly Shirt = Shirt;
  readonly ChevronDown = ChevronDown;

  topSize = signal<string | null>(null);
  bottomSize = signal<string | null>(null);
  isInPerson = signal(false);

  onTopChange(event: Event) {
    this.topSize.set((event.target as HTMLSelectElement).value);
  }

  onBottomChange(event: Event) {
    this.bottomSize.set((event.target as HTMLSelectElement).value);
  }

  toggleInPerson() {
    this.isInPerson.update((v) => !v);

    if (this.isInPerson()) {
      this.topSize.set(null);
      this.bottomSize.set(null);
    }
  }

  submit() {
    // TODO: submit logic
  }
}
