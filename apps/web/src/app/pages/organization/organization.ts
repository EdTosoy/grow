import { Component, computed, signal } from '@angular/core';
import { organizations } from '@grow/common';
import { Pagination } from '@grow/shared-ui';
import { Building, LucideAngularModule, Pencil, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-organization',
  imports: [LucideAngularModule, Pagination],
  templateUrl: './organization.html',
})
export class Organization {
  readonly Building = Building;
  readonly Pencil = Pencil;
  readonly Trash2 = Trash2;

  private readonly itemsPerPage = 5;

  currentPage = signal(1);

  totalPages = computed(() => Math.ceil(organizations.length / this.itemsPerPage));

  currentItems = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    return organizations.slice(start, start + this.itemsPerPage);
  });

  pageNumbers = Array.from({ length: this.totalPages() }, (_, i) => i + 1);

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
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
