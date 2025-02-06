import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  QueryList,
  SimpleChanges,
  ViewChildren,
  ViewChild,
} from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';

import {
  ButtonGroupConfig,
  NavBarConfig,
  NavButtonConfig,
} from './navbar-modal';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
// import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';
import { MatButtonModule } from '@angular/material/button';
import { SafeUrlPipe } from '../safe-url.pipe';
import { CustomButtonComponent } from '../button-component/custom-button.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule,
    // ImageCarouselComponent,
    MatButtonModule,
    // SafeUrlPipe,
    CustomButtonComponent,
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

  setMenuRef(
    groupIndex: number,
    buttonIndex: number,
    menuTrigger: MatMenuTrigger
  ) {
    this.menuRefs.set(`${groupIndex}-${buttonIndex}`, menuTrigger);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['config']) {
  //     this.updateBannerSettings();
  //   }
  // }

  ngAfterViewInit() {
    this.menuTriggers.forEach((trigger, index) => {
      this.menuRefs.set(index.toString(), trigger);
    });
  }

  // Update banner settings dynamically
  // updateBannerSettings() {
  //   if (this.config.banner) {
  //     this.bannerWidth =
  //       this.config.banner.width === 'specific'
  //         ? 'banner-specific'
  //         : 'banner-full';
  //     this.slideshowEnabled = this.config.banner.slideshow ?? false;
  //     this.iframeUrl = this.config.banner.iframeUrl ?? '';
  //     this.iframeWidth = this.config.banner.iframeWidth ?? '';
  //     this.iframeHeight = this.config.banner.iframeHeight ?? '';
  //   }
  // }

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

  getButtonTypeClass(button: NavButtonConfig): string {
    switch (button.type) {
      case 'normal':
        return 'button-normal';
      case 'primary':
        return 'button-primary';
      case 'secondary':
        return 'button-secondary';
      case 'bordered':
        return 'button-bordered';
      default:
        return '';
    }
  }

  onButtonClick(buttonId: string) {
    console.log('buttonId: ', buttonId);
    this.config.activeButton = buttonId; // Update active button state
    console.log('this.config.activeButton: ', this.config.activeButton);
  }

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

  getMenu(groupIndex: number, buttonIndex: number): MatMenuPanel<any> | null {
    const key = `${groupIndex}-${buttonIndex}`;
    const trigger = this.menuRefs.get(key);
    return trigger ? trigger.menu : null; // ✅ Ensure to return the menu, not the trigger
  }
}
