// import { CarouselButtonsConfig } from "../image-carousel/image-carousel.modal";
import { MenuItem } from '../button-component/button.model';
import { ButtonConfig } from '../modals';

export interface NavBarConfig {
  logo?: LogoConfig | null;
  title?: TitleConfig | null;
  buttons?: ButtonGroupConfig[];
  banner?: BannerConfig;
  carouselButtons?: CarouselButtonsConfig;
  activeButton?: string;
}

export interface CarouselButtonsConfig {
  prevIcon?: string;
  nextIcon?: string;
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
  buttonsGroup?: NavButtonConfig[];
}

export interface NavButtonConfig {
  id?: string;
  text?: string;
  url?: string;
  subMenu?: SubMenuConfig[];
  type?: 'normal' | 'primary' | 'secondary' | 'bordered';

  // Add these properties directly in NavButtonConfig
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
  primaryColor?: string;
  secondaryColor?: string;
  onClick?: (row: any) => void;
  validate?: () => boolean;
  menuItems?: NavButtonConfig[];
  isMenuButton?: boolean;
}
export interface SubMenuConfig {
  text?: string;
  url?: string;
}

export interface BannerConfig {
  position: 'top' | 'bottom' | 'middle';
  slideshow?: boolean;
  imageSrc?: string[];
  width?: 'specific' | 'full';
  iframeUrl?: string;
  iframeWidth?: string;
  iframeHeight?: string;
  forcePagination?: boolean;
  iframeMargin?: string;
}
