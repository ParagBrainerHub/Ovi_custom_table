import { ButtonConfig } from '../button-component/button.model';

export interface CardGridConfig {
  gridTitle?: string;
  gridTitleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  gridTitleStyles?: { [key: string]: string };

  gridSubtitle?: string; // 📌 Grid Subtitle
  gridSubtitleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  gridSubtitleStyles?: { [key: string]: string };
  layoutType: 'grid';
  cardConfigs: CardConfig[];
}
export interface CardListConfig {
  listTitle?: string;
  listTitleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  listTitleStyles?: { [key: string]: string };

  listSubtitle?: string; // 📌 list Subtitle
  listSubtitleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  listSubtitleStyles?: { [key: string]: string };
  cardConfigs: CardConfig[];
  layoutType: 'list';
}

export interface CardConfig {
  iframeHeight?: string | null;
  iframeWidth?: string | null;
  iframeUrl?: string | null;
  layout?: 'grid' | 'list';
  width?: number;
  cardActions?: {
    icon: string;
    text: string;
  }[];
  header?: {
    headerStyles?: { [key: string]: string };
    title: string;
    titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
    titleStyles?: { [key: string]: string };
    titleAlign?: 'left' | 'center' | 'right';

    description?: string;
    descriptionTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
    descriptionStyles?: { [key: string]: string };
    descriptionAlign?: 'left' | 'center' | 'right';

    buttonsAlign?: 'left' | 'center' | 'right';
    buttons?: ButtonConfig[];
  };
  imageAlignment?: 'left' | 'right';
  sectionWidths?: [number, number];
  hasBorder?: boolean;
  customStyles?: { [key: string]: string };
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
    align?: 'left' | 'center' | 'right';
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
