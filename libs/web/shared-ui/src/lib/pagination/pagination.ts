import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'lib-pagination',
  imports: [],
  templateUrl: './pagination.html',
})
export class Pagination {
  currentPage = input.required<number>();
  totalPages = input.required<number>();

  pageChange = output<number>();

  pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

  prevPage(): void {
    if (this.currentPage() > 1) {
      this.pageChange.emit(this.currentPage() - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.pageChange.emit(this.currentPage() + 1);
    }
  }

  goToPage(page: number): void {
    this.pageChange.emit(page);
  }
}
