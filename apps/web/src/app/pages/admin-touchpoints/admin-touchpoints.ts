import { Component, computed, signal } from '@angular/core';
import { adminCompanyId } from '@grow/common';
import { Handshake, LucideAngularModule } from 'lucide-angular';
import { Pagination } from '@grow/shared-ui';

@Component({
  selector: 'app-admin-touchpoints',
  imports: [LucideAngularModule, Pagination],
  templateUrl: './admin-touchpoints.html',
})
export class AdminTouchpoints {
  readonly Handshake = Handshake;

  readonly itemsPerPage = 5;
  currentPage = signal(1);

  trainings = adminCompanyId;

  totalPages = computed(() => Math.ceil(this.trainings.length / this.itemsPerPage));

  currentItems = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.trainings.slice(start, end);
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
