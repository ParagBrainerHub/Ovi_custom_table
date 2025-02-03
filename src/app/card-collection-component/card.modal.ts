export interface ButtonConfig {
  text?: string;
  align?: 'left' | 'center' | 'right';
  group?: 'left' | 'right';
  icon?: string;
  action?: () => void;
  showIcon?: boolean;
  iconPosition?: 'left' | 'center' | 'right' | 'full';
  onClick?: (row: any) => void;
  shape?: 'circle' | 'square' | 'rectangle';
  corners?: 'rounded' | 'squared';
  transparent?: boolean;
  foreground?: string;
  background?: string;
  shadow?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  validate?: () => boolean;
}

export interface CardConfig {
  layout?: 'grid' | 'list';
  width?: number;
  header?: {
    title: string;
    align?: 'left' | 'center' | 'right';
    buttonsAlign?: 'left' | 'center' | 'right';
    buttons?: ButtonConfig[];
  };

  image?: {
    position?:
      | 'background'
      | 'top-half'
      | 'middle'
      | 'bottom-half'
      | 'square-under-title'
      | 'rectangle-under-title'
      | 'dark-background-title';
    src?: string;
    hoverEffect?: boolean;
    title?: string;
    description?: string;
  };

  body?: {
    type: 'text' | 'text+buttons' | 'table';
    align: 'left' | 'center' | 'right';
    content: string;
    buttons?: ButtonConfig[];
  };

  content?: {
    description?: string;
    customHtml?: string;
    details?: {
      // columns?: number; // Number of columns (1, 2, or 3)
      // rows?: number; // Number of rows (1, 2, or 3)
      align?: 'left' | 'center' | 'right' | 'multi-column';
      columns?: 1 | 2 | 3;
      rows?: 1 | 2 | 3;
      content?: {
        text?: string;
        icon?: string;
      }[][];
    };
  };

  footer?: {
    type: 'text' | 'buttons';
    buttons?: ButtonConfig[];
    text: string;
    align?: 'left' | 'center' | 'right' | 'multi-column';
  };
}
