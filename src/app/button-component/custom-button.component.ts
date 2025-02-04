import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { validateButtonProps } from './button.model';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent {
  router = inject(Router);
  @Input() text?: string = '';
  @Input() textAlign?: 'left' | 'center' | 'right' = 'center';
  @Input() icon?: string = '';
  @Input() showIcon?: boolean = true;
  @Input() onClick?: (event: Event) => void;
  @Input() iconPosition?:
    | 'left'
    | 'center'
    | 'right'
    | 'full'
    | 'top'
    | 'bottom' = 'left';
  @Output() buttonClick = new EventEmitter<string>();
  @Input() loadingData?: boolean = false;

  @Input() shape?: 'circle' | 'square' | 'rectangle' = 'rectangle';
  @Input() corners?: 'rounded' | 'squared' = 'rounded';

  @Input() foreground?: string = '';
  @Input() background?: string = '';
  @Input() shadow?: boolean = true;

  @Input() transparent?: boolean = false;
  @Input() border?: boolean = true;
  @Input() reverseColorsOnHover: boolean = false;

  @Input() navigate: boolean = false;
  @Input() url: string = '';
  @Input() validate?: () => boolean;
  loading: boolean = false;
  isValid: boolean = true;
  isPageLoading: boolean = true;

  primaryColor: string = 'black';
  secondaryColor: string = 'red';

  hover: boolean = false;

  ngOnInit() {
    this.validateButton();
    setTimeout(() => {
      this.isPageLoading = false;
    }, 2000);
  }

  async handleClick(event: Event) {
    this.loading = true;
    debugger;
    try {
      if (this.onClick) {
        this.onClick(event); // Call the onClick handler
      }

      // If a URL is provided, navigate to the URL
      if (this.url) {
        await this.router.navigate([this.url]);
      }
      // Case 1: If both click handler and navigation are needed
      if (this.buttonClick.observed && this.navigate && this.url) {
        debugger;
        await Promise.resolve(this.buttonClick.emit(this.text || ''));
        console.log('this.url: ', this.url);
        await this.router.navigate([this.url]);
      }
      // Case 2: Only click handler, no navigation
      else if (this.buttonClick.observed && !this.navigate) {
        debugger;
        await Promise.resolve(this.buttonClick.emit(this.text || ''));
      }
      // Case 3: Only navigation, no click handler
      else if (!this.buttonClick.observed && this.url) {
        debugger;
        console.log('this.url: ', this.url);
        await this.router.navigate([this.url]);
      }
    } catch (error) {
      console.error('Error in button click handler:', error);
    } finally {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }

  getBorderRadius(): string {
    if (this.shape === 'circle') {
      return '50%';
    }
    return this.corners === 'rounded' ? '8px' : '0';
  }

  validateButton() {
    try {
      validateButtonProps({
        text: this.text,
        icon: this.icon,
        showIcon: this.showIcon,
        iconPosition: this.iconPosition,
        navigate: this.navigate,
        url: this.url,
        validate: this.validate,
        textAlign: this.textAlign,
      });
      this.isValid = true;
    } catch (error) {
      this.isValid = false;
      console.error(error);
      throw error;
    }
  }

  getButtonStyle() {
    const borderColor = this.primaryColor;
    const backgroundColor = this.transparent
      ? 'transparent'
      : this.primaryColor;

    if (this.icon && !this.text) {
      return {
        backgroundColor: this.secondaryColor,
        color: this.primaryColor,
        border: 'none',
      };
    }

    if (this.transparent && !this.border) {
      return {
        backgroundColor: 'transparent',
        color: this.primaryColor,
        border: 'none',
      };
    }

    if (!this.transparent && !this.border) {
      return {
        backgroundColor: this.primaryColor,
        color: 'white',
        border: 'none',
      };
    }
    if (this.transparent && this.border) {
      return {
        backgroundColor: 'transparent',
        color: this.primaryColor,
        border: `1px solid ${borderColor}`,
      };
    }
    if (!this.transparent && this.border) {
      return {
        backgroundColor: this.primaryColor,
        color: 'white',
        border: `1px solid ${borderColor}`,
      };
    }
    return {
      backgroundColor: this.primaryColor,
      color: 'white',
      border: 'none',
    };
  }

  getHoverStyle() {
    const hoverColor = this.secondaryColor;

    if (this.icon && !this.text) {
      return {
        backgroundColor: this.primaryColor,
        color: 'white',
        border: 'none',
      };
    }

    if (this.reverseColorsOnHover && !this.transparent && !this.border) {
      return {
        backgroundColor: this.secondaryColor,
        color: this.primaryColor,
        border: 'none',
      };
    }

    if (this.transparent && !this.border) {
      return {
        backgroundColor: 'transparent',
        color: hoverColor,
        border: 'none',
      };
    }

    if (!this.transparent && !this.border) {
      return {
        backgroundColor: hoverColor,
        color: 'white',
        border: 'none',
      };
    }

    if (this.transparent && this.border) {
      return {
        backgroundColor: this.primaryColor,
        color: 'white',
      };
    }

    if (!this.transparent && this.border) {
      return {
        backgroundColor: hoverColor,
        color: 'white',
      };
    }
    return {
      backgroundColor: hoverColor,
      color: 'white',
    };
  }
}
