import { Component, computed, signal } from '@angular/core';
import { employees } from '@grow/common';
import { Pagination } from '@grow/shared-ui';
import { LucideAngularModule, SquareUser } from 'lucide-angular';

@Component({
  selector: 'app-employees',
  imports: [LucideAngularModule, Pagination],
  templateUrl: './employees.html',
})
export class Employees {
  readonly SquareUser = SquareUser;

  private readonly itemsPerPage = 5;

  currentPage = signal(1);

  totalPages = computed(() => Math.ceil(employees.length / this.itemsPerPage));
  currentItems = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    return employees.slice(start, start + this.itemsPerPage);
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
