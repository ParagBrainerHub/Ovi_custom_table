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


export interface ButtonConfig {
  text: string;
  icon?: string;
  showIcon?: boolean;
  iconPosition?: 'left' | 'center' | 'right' | 'full';
  onClick: (row: any) => void;
  shape?: 'circle' | 'square' | 'rectangle';
  corners?: 'rounded' | 'squared';
  transparent?: boolean;
  foreground?: string;
  background?: string;
  shadow?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  validate?: () => boolean;
}
