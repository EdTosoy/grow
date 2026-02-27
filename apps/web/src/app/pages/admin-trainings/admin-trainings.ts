import { Component, computed, signal } from '@angular/core';
import { LucideAngularModule, Plus, SquareUser } from 'lucide-angular';
import { trainingData } from '../../shared/constants/training.constants';

@Component({
  selector: 'app-admin-trainings',
  imports: [LucideAngularModule],
  templateUrl: './admin-trainings.html',
})
export class AdminTrainings {
  readonly Plus = Plus;
  readonly SquareUser = SquareUser;
  readonly trainings = trainingData;

  // Signal replaces React useState — initialized to first category
  selectedCategory = signal<string>(this.trainings[0]?.category ?? '');

  // Computed filtered list — replaces inline .filter() in JSX
  filteredTrainings = computed(() =>
    this.trainings.filter((t) => t.category === this.selectedCategory())
  );

  onCategoryChange(value: string): void {
    this.selectedCategory.set(value);
  }
}
