import { ButtonConfig } from '../button-component/button.model';

export interface NavBarConfig {
  style?: Partial<CSSStyleDeclaration>;
  logo?: LogoConfig | null;
  title?: TitleConfig | null;
  buttons?: ButtonGroupConfig[];
  activeButton?: string;
  isBorderTop?: boolean;
  isBorderBottom?: boolean;
}
export interface LogoConfig {
  url?: string;
  position?: 'left' | 'middle' | 'right';
}

export interface TitleConfig {
  text?: string;
  position?: 'left' | 'right';
  alignWithLogo?: boolean;
}

export interface ButtonGroupConfig {
  position?: 'left' | 'center' | 'right';
  alignWithLogo?: boolean;
  buttonsGroup?: ButtonConfig[];
}

export interface NavButtonConfig {
  id?: string;
  text?: string;
  url?: string;
  subMenu?: SubMenuConfig[];
  type?: 'normal' | 'primary' | 'secondary' | 'bordered';
  icon?: string;
  showIcon?: boolean;
  iconPosition?: 'left' | 'center' | 'right' | 'full' | 'top' | 'bottom';
  shape?: 'circle' | 'square' | 'rectangle';
  corners?: 'rounded' | 'squared';
  transparent?: boolean;
  foreground?: string;
  background?: string;
  shadow?: boolean;
  border?: boolean;
  navigate?: boolean;
  onClick?: (row: any) => void;
  validate?: () => boolean;
  menuItems?: NavButtonConfig[];
  isMenuButton?: boolean;
}
export interface SubMenuConfig {
  text?: string;
  url?: string;
}
