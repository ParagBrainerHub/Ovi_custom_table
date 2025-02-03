import { ButtonConfig } from './../button-component/button.model';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TableColumn, TableConfig } from './table-column.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../button-component/custom-button.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [FormsModule, CommonModule, CustomButtonComponent, NgxSkeletonLoaderModule],
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css'],
})
export class CustomTableComponent implements OnChanges {
  @Input() data: any[] = [];
  @Input() config!: TableConfig;

  tableStyle: any = {};
  buttonStyle: any = {};
  sortColumnKey: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 10;
  editableCell: { rowIndex: number; columnKey?: string } | null = null;
  //tableConfig: any;

  isPageLoading: boolean = true;
  searchQuery: string = '';
  filteredData: any[] = [];
  filterAllignment: any = '';
  filterWidth: any = ''
  showFilter: boolean = false;

  ngOnInit() {
    this.itemsPerPage = this.config.itemsPerPage || 10;
    this.filteredData = [...this.data];
    this.totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  ngAfterViewInit() {
    this.filterAllignment = this.config.filterAlignment;
    this.showFilter = this.config.showFilter;
    this.filterWidth = this.config.filterWidth;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.config) {
      this.tableStyle = {
        margin: this.config.margin || '0px',
      };

      this.buttonStyle = {
        'margin-right': this.config.elementSpacing || '0px',
      };

      console.log('Updated Table Style:', this.tableStyle);
      console.log('Updated Button Style:', this.buttonStyle);
    }
  }

  getFlexAlignment(alignment: string): string {
    switch (alignment) {
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      case 'left':
      default:
        return 'flex-start';
    }
  }

  // Method to filter data based on search query
  filterData() {
    const query = this.searchQuery.toLowerCase();
    console.log(this.filteredData)

    if (query) {
      this.filteredData = this.data.filter(item => {
        return Object.keys(item).some(key => {
          const value = item[key];
          if (typeof value === 'string') {
            return value.toLowerCase().includes(query);
          } else if (typeof value === 'number') {
            return value.toString().includes(query);
          }
          return false;
        });
      });
    } else {
      this.filteredData = [...this.data];
    }

    this.totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
    this.currentPage = 1;
  }

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.sortedData.slice(startIndex, endIndex);
  }

  get sortedColumns(): TableColumn[] {
    return this.config.columns.sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  get sortedData(): any[] {
    if (!this.sortColumnKey) return this.filteredData;

    return [...this.filteredData].sort((a, b) => {
      const aValue = a[this.sortColumnKey!];
      const bValue = b[this.sortColumnKey!];

      if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  handleActionClick(action: ButtonConfig, row: any) {
    if (action.onClick) {
      action.onClick(row);
    }
  }

  onHeaderClick(column: TableColumn) {
    if (this.sortColumnKey === column.key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumnKey = column.key;
      this.sortDirection = 'asc';
    }
  }

  onItemsPerPageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target && target.value) {
      this.itemsPerPage = Number(target.value);
      this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
      this.currentPage = 1;
    }
  }

  trackItem(index: number, item: any) {
    return item.id;
  }

  trackColumn(index: number, column: TableColumn) {
    return column.key;
  }

  startEditing(rowIndex: number) {
    this.editableCell = { rowIndex };
  }

  saveEdit(rowIndex: number) {
    if (this.editableCell && this.editableCell.rowIndex === rowIndex) {
      console.log('Changes saved for row:', this.data[rowIndex]);
      this.stopEditing();
    }
  }

  stopEditing() {
    this.editableCell = null;
  }

  isImage(url: string): boolean {
    return /\.(jpg|jpeg|png|gif)$/.test(url);
  }

  isVideo(url: string): boolean {
    return /\.(mp4|webm|ogg)$/.test(url);
  }
}
