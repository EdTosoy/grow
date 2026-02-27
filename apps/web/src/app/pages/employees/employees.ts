import { Component, computed, signal } from '@angular/core';
import { LucideAngularModule, SquareUser } from 'lucide-angular';
const employees = [
  {
    id: 1,
    name: 'Boone Copcote',
    position: 'Financial Advisor',
    gender: 'Male',
    department: 'Support',
    status: 'Done',
    signedDate: 'January 18, 2026',
  },
  {
    id: 2,
    name: 'Albie Barrington',
    position: 'Nurse Practitioner',
    gender: 'Male',
    department: 'Services',
    status: 'Pending',
    signedDate: null,
  },
];
@Component({
  selector: 'app-employees',
  imports: [LucideAngularModule],
  templateUrl: './employees.html',
})
export class Employees {
  readonly SquareUser = SquareUser;

  private readonly itemsPerPage = 5;

  currentPage = signal(1);

  totalPages = Math.ceil(employees.length / this.itemsPerPage);

  currentItems = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    return employees.slice(start, start + this.itemsPerPage);
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
