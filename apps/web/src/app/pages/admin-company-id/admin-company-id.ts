import { adminCompanyId } from './../../shared/constants/companyId.constants';
import { Component, computed, signal } from '@angular/core';
import { IdCard, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-admin-company-id',
  imports: [LucideAngularModule],
  templateUrl: './admin-company-id.html',
})
export class AdminCompanyIdPage {
  readonly IdCard = IdCard;

  readonly itemsPerPage = 5;

  currentPage = signal(1);

  data = adminCompanyId;

  totalPages = Math.ceil(this.data.length / this.itemsPerPage);

  currentItems = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.data.slice(start, end);
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
