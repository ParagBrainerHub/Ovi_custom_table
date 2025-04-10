import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CustomButtonComponent } from '../button-component/custom-button.component';

import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

// import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TableColumn, TableConfig } from './material-table-column.model';
import { MatIconModule } from '@angular/material/icon';
import { PaginationComponent } from '../pagination/pagination.component';
import { ButtonConfig } from '../button-component/button.model';
import { User } from '../modals';
// import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  standalone: true,
  selector: 'app-custom-material-table',
  templateUrl: './custom-material-table.component.html',
  styleUrls: ['./custom-material-table.component.css'],
  imports: [
    MatTableModule,
    FormsModule,
    CommonModule,
    CustomButtonComponent,
    NgxSkeletonLoaderModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    PaginationComponent,
  ],
})
export class CustomMaterialTableComponent implements OnInit, OnChanges {
  @Input() config!: TableConfig;
  @Input() data: any[] = [];
  @Output() actionEditClicked: EventEmitter<any> = new EventEmitter();
  @Output() actionDeleteClicked: EventEmitter<any> = new EventEmitter();
  tableStyle: any = {};
  buttonStyle: any = {};

  displayedColumns: string[] = [];

  dataSource: any;

  // toppings = new FormControl('');
  // toppingList: string[] = [
  //   'Extra cheese',
  //   'Mushroom',
  //   'Onion',
  //   'Pepperoni',
  //   'Sausage',
  //   'Tomato',
  // ];

  // Column selection
  columnControl = new FormControl<string[]>([]);
  columnList: string[] = [];
  selectedColumns: string[] = [];

  getColumnTitle(columnKey: string | undefined): string | undefined {
    // Find the column in the config and return its title
    const column = this.config.columns.find(
      (col: any) => col.key === columnKey
    );
    return column ? column.title : columnKey;
  }

  sortColumnKey: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  currentPage: number = 1;
  totalPages: number = 1;
  directionLinks: boolean = true;
  maxSize: number = 7;
  editableCell: { rowIndex: number; columnKey?: string } | null = null;

  isPageLoading: boolean = true;

  originalData: any[] = [];
  filterAllignment: any = '';
  filterWidth: any = '';
  showFilter: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    var filteredData = this.data.map(
      (user) =>
        Object.fromEntries(
          Object.keys(user).map((key) => [key, user[key]])
        ) as Record<string, any>
    );

    this.dataSource = new MatTableDataSource(filteredData);
    this.initializeColumns();

    this.columnList = this.config.columns
      .map((column) => column.title)
      .filter((title): title is string => !!title);

    this.selectedColumns = this.config.columns
      .map((column) => column.key)
      .filter((key): key is string => !!key);
    console.log(this.selectedColumns, 'this.selectedColumns');
    this.columnControl.setValue(this.selectedColumns);
    this.setupDataSource();
  }

  setupDataSource() {
    var filteredData = this.data.map((user) => ({
      name: user.name,
      role: user.role,
      email: user.email,
      imageUrl: user.imageUrl,
      videoUrl: user.videoUrl,
    }));

    // Only set data source once, don't overwrite on each column change
    if (!this.dataSource) {
      this.dataSource = new MatTableDataSource(filteredData);
      this.initializeColumns();
    }
  }

  onColumnSelectionChange() {
    const updatedColumns = (this?.columnControl.value || [])
      .map((title) => {
        const column = this.config.columns.filter((col) => col.key === title);
        return column.length ? column[0].key : undefined;
      })
      .filter((key) => key !== undefined);
    // this.displayedColumns = [...updatedColumns];
    this.updateDisplayedColumns(updatedColumns);
  }

  dropSelectedColumns(event: CdkDragDrop<string[]>) {
    // Get the dragged column from the previous container
    const draggedColumn = event.previousContainer.data[event.previousIndex];

    // Check if the dragged column is included in the columnControl value
    if ((this?.columnControl?.value ?? []).includes(draggedColumn)) {
      // If it exists in columnControl, proceed with the drag operation
      moveItemInArray(
        this.selectedColumns,
        event.previousIndex,
        event.currentIndex
      );

      let updatedDisplayArray = this.selectedColumns.filter((item) =>
        (this?.columnControl?.value ?? []).includes(item)
      );
      this.updateDisplayedColumns(updatedDisplayArray);
    } else {
      console.log('Dragged column is not allowed for drag operation');
      return;
    }
  }

  dropTable(event: CdkDragDrop<any[]>) {
    const previousIndex = this.dataSource.data.findIndex(
      (row: any) => row === event.item.data
    );
    moveItemInArray(this.dataSource.data, previousIndex, event.currentIndex);
    this.dataSource.data = [...this.dataSource.data];
  }

  getColumnType(columnKey: string | any): string | any {
    const column = this.config.columns.find((col) => col.key === columnKey);
    return column ? column.type : 'text';
  }

  updateDisplayedColumns(UpdatedDisplatList: string[]) {
    this.displayedColumns = [...UpdatedDisplatList];

    if (this.config.actions && this.config.actions.length > 0) {
      this.displayedColumns.push('actions');
    }
  }

  initializeColumns() {
    const sortedColumns = this.config.columns.sort(
      (a, b) => (a.order || 0) - (b.order || 0)
    );

    this.displayedColumns = [...sortedColumns.map((column) => column.key)];
    if (this.config.actions && this.config.actions.length > 0) {
      this.displayedColumns.push('actions');
    }
  }

  ngAfterViewInit() {
    console.log('this.config: ', this.config);
    console.log('data: ', this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.filterAllignment = this.config.filterAlignment;
    this.showFilter = this.config.showFilter;
    this.filterWidth = this.config.filterWidth;

    // this.paginator.page.subscribe(() => {
    //   this.currentPage = this.paginator.pageIndex;
    //   this.loadPageData();
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
      this.updateTableData();
    }

    if (this.config) {
      this.tableStyle = {
        margin: this.config.margin || '0px',
      };

      this.buttonStyle = {
        'margin-right': this.config.elementSpacing || '0px',
      };
    }
  }

  updateTableData() {
    var filteredData = this.data.map((user) =>
      Object.fromEntries(Object.keys(user).map((key) => [key, user[key]]))
    );

    this.dataSource.data = filteredData;
    this.dataSource._updateChangeSubscription();

    console.log('Updated table data:', this.dataSource.data);
  }

  startEditing(rowIndex: number) {
    this.editableCell = { rowIndex };
  }

  saveEdit(rowIndex: number) {
    if (this.editableCell && this.editableCell.rowIndex === rowIndex) {
      this.stopEditing();
    }
  }

  cancelEdit(): void {
    this.editableCell = null;
  }

  stopEditing() {
    this.editableCell = null;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAlignment(columnKey: string): string {
    return this.config.columnAlignments[columnKey] || 'left';
  }

  onHeaderClick(column: TableColumn) {
    if (this.sortColumnKey === column.key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumnKey = column.key;
      this.sortDirection = 'asc';
    }
  }

  getAlignmentClass(column: TableColumn): string {
    const alignment =
      column.alignment || this.config.columnAlignments?.[column.key] || 'left';
    return `align-${alignment}`;
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

  getHeaderAlignment(columnKey: string): string {
    return (
      this.config.columns.find((col) => col.key === columnKey)?.alignment ||
      this.config.columnAlignments?.[columnKey] ||
      'left'
    );
  }
  getHeaderMinWidth(columnKey: string): string {
    return (
      this.config.columns.find((col) => col.key === columnKey)?.minWidth ||
      '150px'
    );
  }
  getHeaderMaxWidth(columnKey: string): string {
    return (
      this.config.columns.find((col) => col.key === columnKey)?.maxWidth ||
      '300px'
    );
  }

  getRowAlignment(row: User, columnKey: string): string {
    return row.rowAlignments?.[columnKey] || 'left';
  }

  handleActionClick(action: any, element: any): void {
    if (action.text === 'Delete') {
      this.deleteRow(element);
    } else if (action.text === 'View') {
      this.viewRow(element);
    } else if (
      action.icon === '✏️' ||
      action.icon === 'edit' ||
      action.icon === 'Edit'
    ) {
      this.actionEditClicked.emit(element);
    } else if (
      action.icon === '❌' ||
      action.icon === 'delete' ||
      action.icon === 'Delete'
    ) {
      this.actionDeleteClicked.emit(element.id);
    }
  }

  deleteRow(row: any): void {
    // console.log('Delete row:', row);
  }

  viewRow(row: any): void {
    // console.log('View row:', row);
  }

  isImage(url: string): boolean {
    return /\.(jpg|jpeg|png|gif)$/.test(url);
  }

  isVideo(url: string): boolean {
    return /\.(mp4|webm|ogg)$/.test(url);
  }

  byteArrayToBase64(byteArray: number[]): string {
    const byteCharacters = String.fromCharCode(...byteArray);
    const base64String = btoa(byteCharacters);
    return `data:image/png;base64,${base64String}`; // Change image/png to the appropriate type if needed
  }
  onPageChange(page: number) {
    this.config.currentPage = page;
  }

  get actions(): ButtonConfig[] {
    return this.config?.actions ?? []; // Return an empty array if undefined
  }
}
