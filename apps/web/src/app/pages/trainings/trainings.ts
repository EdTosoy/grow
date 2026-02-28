import { Component, computed, signal } from '@angular/core';
import { TrainingCategory, TRAININGS } from '@grow/common';
import { LucideAngularModule, Clapperboard, Check } from 'lucide-angular';

@Component({
  selector: 'app-trainings',
  imports: [LucideAngularModule],
  templateUrl: './trainings.html',
})
export class Trainings {
  readonly Clapperboard = Clapperboard;
  readonly Check = Check;

  trainings = TRAININGS;

  selectedCategory = signal<string | null>(this.trainings[0]?.category ?? null);

  filteredTrainings = computed<TrainingCategory[]>(() =>
    this.trainings.filter((t) => t.category === this.selectedCategory())
  );

  onCategoryChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedCategory.set(value);
  }
}
