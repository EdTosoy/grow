import { Component, computed, signal } from '@angular/core';
import { uniforms } from '@grow/common';
import { Pagination } from '@grow/shared-ui';
import { LucideAngularModule, Shirt } from 'lucide-angular';

@Component({
  selector: 'app-admin-uniform',
  imports: [LucideAngularModule, Pagination],
  templateUrl: './admin-uniform.html',
})
export class AdminUniform {
  readonly Shirt = Shirt;

  readonly itemsPerPage = 5;
  currentPage = signal(1);
  employees = uniforms;

  totalPages = computed(() => Math.ceil(this.employees.length / this.itemsPerPage));

  currentItems = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.employees.slice(start, end);
  });

  pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

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
