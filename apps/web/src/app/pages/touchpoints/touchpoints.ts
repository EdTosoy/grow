import { Component, computed, signal } from '@angular/core';
import { Handshake, LucideAngularModule } from 'lucide-angular';
import { touchpoints } from '../../shared/constants/touchpoints.constants';

@Component({
  selector: 'app-touchpoints',
  imports: [LucideAngularModule],
  templateUrl: './touchpoints.html',
  styleUrl: './touchpoints.css',
})
export class Touchpoints {
  readonly Handshake = Handshake;

  // Pagination state
  currentPage = signal(1);
  readonly itemsPerPage = 5;

  // Total pages
  totalPages = computed(() => Math.ceil(touchpoints.length / this.itemsPerPage));

  // Paginated items
  currentItems = computed(() => {
    const indexOfLastItem = this.currentPage() * this.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - this.itemsPerPage;
    return touchpoints.slice(indexOfFirstItem, indexOfLastItem);
  });

  // Page numbers array
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

  notifyHR(itemId: number) {
    // TODO: hook API here
    console.log('Notify HR for ID:', itemId);
  }
}
