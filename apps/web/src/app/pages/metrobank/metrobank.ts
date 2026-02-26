import { Component, signal } from '@angular/core';
import { CreditCard, LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'app-metrobank',
  imports: [LucideAngularModule],
  templateUrl: './metrobank.html',
  styleUrl: './metrobank.css',
})
export class Metrobank {
  readonly CreditCard = CreditCard;
  readonly X = X;

  idPictureFront = signal<string | null>(null);
  idPictureBack = signal<string | null>(null);
  signature = signal<string | null>(null);

  onIdPictureFrontChange(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) this.idPictureFront.set(file.name);
  }

  removeIdPictureFront() {
    this.idPictureFront.set(null);
  }

  onIdPictureBackChange(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) this.idPictureBack.set(file.name);
  }

  removeIdPictureBack() {
    this.idPictureBack.set('');
  }

  onSignatureChange(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) this.signature.set(file.name);
  }

  removeSignature() {
    this.signature.set(null);
  }

  submit() {
    // TODO:
  }
}
