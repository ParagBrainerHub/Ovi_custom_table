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
import { MatButtonModule } from '@angular/material/button';
import { CustomButtonComponent } from '../button-component/custom-button.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    CustomButtonComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() config!: NavBarConfig;
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

  getToolbarStyle(): { [key: string]: string } {
    return {
      ...(this.config.style
        ? Object.fromEntries(
            Object.entries(this.config.style).map(([key, value]) => [
              key,
              String(value),
            ])
          )
        : {}),
      'border-top': this.config.isBorderTop
        ? `3px solid ${
            this.config.style?.borderTopColor ?? 'var(--secondary-color)'
          }`
        : 'none',
      'border-bottom': this.config.isBorderBottom
        ? `3px solid ${
            this.config.style?.borderBottomColor ?? 'var(--secondary-color)'
          }`
        : 'none',
    };
  }

  ngAfterViewInit() {
    this.menuTriggers.forEach((trigger, index) => {
      this.menuRefs.set(index.toString(), trigger);
    });
  }

  // Banner settings properties
  bannerWidth = '';
  slideshowEnabled = false;
  iframeUrl = '';
  iframeWidth = '100%';
  iframeHeight = '400px';

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

  getMenu(groupIndex: number, buttonIndex: number): MatMenuPanel<any> | null {
    const key = `${groupIndex}-${buttonIndex}`;
    const trigger = this.menuRefs.get(key);
    return trigger ? trigger.menu : null; // ✅ Ensure to return the menu, not the trigger
  }
}
