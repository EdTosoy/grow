import { Component, signal } from '@angular/core';
import { IdCard, LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'app-company-id',
  imports: [LucideAngularModule],
  templateUrl: './company-id.html',
  styleUrl: './company-id.css',
})
export class CompanyId {
  readonly IdCard = IdCard;
  readonly X = X;
  idPicture = signal<string | null>(null);
  signature = signal<string | null>(null);

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.idPicture.set(file.name);
    }
  }
  removeFile() {
    this.idPicture.set(null);
  }

  onSpecimenChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.signature.set(file.name);
    }
  }

  removeSpecimen() {
    this.signature.set(null);
  }

  submit() {
    // TODO:
  }
}
