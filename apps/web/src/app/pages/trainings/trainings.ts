import { Component, computed, signal } from '@angular/core';
import { LucideAngularModule, Clapperboard, Check } from 'lucide-angular';
import { TrainingCategory, TRAININGS } from '../../shared/constants/training.constants';

@Component({
  selector: 'app-trainings',
  imports: [LucideAngularModule],
  templateUrl: './trainings.html',
  styleUrl: './trainings.css',
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
