// import { CarouselButtonsConfig } from "../image-carousel/image-carousel.modal";

export interface NavBarConfig {
  logo?: LogoConfig | null;
  title?: TitleConfig | null;
  buttons?: ButtonGroupConfig[];
  banner?: BannerConfig;
  carouselButtons?: CarouselButtonsConfig;
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
  text?: string;
  url?: string;
  subMenu?: SubMenuConfig[];
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
