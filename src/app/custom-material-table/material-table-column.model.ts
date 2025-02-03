import { ButtonConfig } from '../button-component/button.model';
// import { TableColumn } from "../custom-table/table-column.model";

export interface TableColumn {
  key: string;
  title?: string;
  order?: number;
  type?: 'text' | 'image' | 'video' | 'multi';
  minWidth?: string;
  maxWidth?: string;
  alignment?: 'left' | 'center' | 'right' | 'top' | 'bottom';
}

export interface TableConfig {
  isHeader: boolean;
  columns: TableColumn[];
  itemsPerPage: number;
  maxItemsOptions: number[];
  buttons?: { [key: string]: () => void };
  editableColumns?: string[];
  actions?: ButtonConfig[];
  rowHeight?: string;
  maxRowHeight?: string;
  columnAlignments?: any;
  filterWidth?: string;
  filterAlignment?: 'left' | 'center' | 'right';
  showFilter: boolean;
}
