import { Component, computed, signal } from '@angular/core';
import { Building, LucideAngularModule, Pencil, Trash2 } from 'lucide-angular';

const organizations = [
  {
    id: 0,
    department: 'Human Resources',
    units: 3,
  },
  {
    id: 1,
    department: 'Accounting',
    units: 5,
  },
];
@Component({
  selector: 'app-organization',
  imports: [LucideAngularModule],
  templateUrl: './organization.html',
  styleUrl: './organization.css',
})
export class Organization {
  readonly Building = Building;
  readonly Pencil = Pencil;
  readonly Trash2 = Trash2;

  private readonly itemsPerPage = 7;

  currentPage = signal(1);

  totalPages = Math.ceil(organizations.length / this.itemsPerPage);

  currentItems = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    return organizations.slice(start, start + this.itemsPerPage);
  });

  pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);

  nextPage() {
    if (this.currentPage() < this.totalPages) {
      this.currentPage.update((p) => p + 1);
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
    }
  }

  goToPage(page: number) {
    this.currentPage.set(page);
  }
}
