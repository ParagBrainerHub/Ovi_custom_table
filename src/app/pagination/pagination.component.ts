import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() totalItems: number = 0; // Total number of items
  @Input() itemsPerPage: number = 10; // Items per page
  @Input() currentPage: number = 1; // Current page number
  @Input() maxSize: number = 100; // Maximum number of page buttons to display
  @Input() directionLinks: boolean = true; // Show previous/next links

  @Output() pageChange = new EventEmitter<number>(); // Emit page change event

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pageNumbers(): number[] {
    let pages = [];
    let start = Math.max(1, this.currentPage - Math.floor(this.maxSize / 2));
    let end = Math.min(this.totalPages, start + this.maxSize - 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  changePage(page: number): void {
    if (page !== this.currentPage && page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }
}
