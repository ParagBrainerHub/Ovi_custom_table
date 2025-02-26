import { ButtonConfig } from './button-component/button.model';

export interface ColumnItem {
  type: 'button' | 'image' | 'video' | 'text';
  content: any;
  config?: ButtonConfig;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  imageUrl?: string;
  videoUrl?: string;
  actions?: ButtonConfig[];
  contentItems?: { [columnKey: string]: ColumnItem[] };
  rowAlignments?: { [key: string]: 'left' | 'center' | 'right' };
  imageLoading?: boolean;
  videoLoading?: boolean;
  //byteArray?: number[];
}
