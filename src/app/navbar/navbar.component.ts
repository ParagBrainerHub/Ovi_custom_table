import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  QueryList,
  SimpleChanges,
  ViewChildren,
  ViewChild,
} from '@angular/core';
import {
  ButtonGroupConfig,
  NavBarConfig,
  NavButtonConfig,
} from './navbar-modal';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';
import { MatButtonModule } from '@angular/material/button';
import { SafeUrlPipe } from '../safe-url.pipe';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule,
    ImageCarouselComponent,
    MatButtonModule,
    SafeUrlPipe,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() config!: NavBarConfig;

  // menuRefs = new Map();
  // menuRefs = new Map<string, any>();
  @ViewChildren(MatMenuTrigger) menuTriggers!: QueryList<MatMenuTrigger>;

  menuRefs = new Map<string, MatMenuTrigger>();
  iframeMargin: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      this.updateBannerSettings();
    }
  }

  // Update banner settings dynamically
  updateBannerSettings() {
    if (this.config.banner) {
      this.bannerWidth =
        this.config.banner.width === 'specific'
          ? 'banner-specific'
          : 'banner-full';
      this.slideshowEnabled = this.config.banner.slideshow ?? false;
      this.iframeUrl = this.config.banner.iframeUrl ?? '';
      this.iframeWidth = this.config.banner.iframeWidth ?? '';
      this.iframeHeight = this.config.banner.iframeHeight ?? '';
    }
  }

  // Banner settings properties
  bannerWidth = '';
  slideshowEnabled = false;
  iframeUrl = '';
  iframeWidth = '100%';
  iframeHeight = '400px';

  // getLogoClass(): string {
  //   if (!this.config.logo) return '';
  //   return this.config.logo.position === 'left'
  //     ? 'logo-left'
  //     : this.config.logo.position === 'middle'
  //     ? 'logo-center'
  //     : 'logo-right';
  // }

  // getTitleClass(): string {
  //   if (!this.config.title) return '';
  //   return this.config.title.position === 'left' ? 'title-left' : 'title-right';
  // }

  getButtonGroupClass(buttonGroup: ButtonGroupConfig): string {
    const position =
      buttonGroup.position === 'left'
        ? 'buttons-left'
        : buttonGroup.position === 'center'
        ? 'buttons-center'
        : 'buttons-right';
    return buttonGroup.alignWithLogo ? `${position} align-logo` : position;
  }

  getLogoClass(): string {
    if (!this.config.logo) return '';
    return this.config.logo.position === 'left' ? 'logo-left' : 'logo-right';
  }

  getTitleClass(): string {
    if (!this.config.title) return '';
    return this.config.title.position === 'left' ? 'title-left' : 'title-right';
  }

  // getButtonGroupClass(buttonGroup: ButtonGroupConfig): string {
  //   return buttonGroup.position === 'center'
  //     ? 'buttons-center'
  //     : 'buttons-right';
  // }

  getMenu(groupIndex: number, buttonIndex: number): MatMenuTrigger {
    const key = `${groupIndex}-${buttonIndex}`;
    if (!this.menuRefs.has(key)) {
      const trigger = this.menuTriggers.toArray()[this.menuRefs.size];
      this.menuRefs.set(key, trigger);
    }
    return this.menuRefs.get(key)!;
  }
}
