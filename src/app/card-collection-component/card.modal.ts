import { Type } from '@angular/core';
import { ButtonConfig } from '../button-component/button.model';

export interface CardGridConfig {
  gridTitle?: string;
  gridTitleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  gridTitleStyles?: { [key: string]: string };

  gridSubtitle?: string; // 📌 Grid Subtitle
  gridSubtitleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  gridSubtitleStyles?: { [key: string]: string };
  layoutType: 'grid';
  gridContainerStyle?: { [key: string]: string };
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
  listContainerStyle?: { [key: string]: string };
  layoutType: 'list';
}

export interface DynamicComponentConfig {
  dynamicComponent: Type<any>;
  dynamicComponentConfig?: { [key: string]: any };
}

export interface CardConfig {
  dynamicComponents?: DynamicComponentConfig[];
  iframeHeight?: string | null;
  iframeWidth?: string | null;
  iframeUrl?: string | null;
  layout?: 'grid' | 'list';
  width?: number;
  imageAlignment?: 'left' | 'right';
  sectionWidths?: [number, number];
  hasBorder?: boolean;
  customStyles?: { [key: string]: string };
  hoverStyles?: {
    [key: string]: string;
  };
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

    description?: {
      descriptionText: string;
      descriptionTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
      descriptionStyles?: { [key: string]: string };
      descriptionAlign?: 'left' | 'center' | 'right';
    }[];

    buttonsAlign?: 'left' | 'center' | 'right';
    buttons?: ButtonConfig[];

    icons?: {
      icon: string;
      iconStyles?: { [key: string]: string };
      iconPlacement?: 'left' | 'right' | 'top' | 'bottom';
    }[];
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
