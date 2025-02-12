import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonConfig, MenuItem, validateButtonProps } from './button.model';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    NgxSkeletonLoaderModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent implements OnInit {
  hoveredItems: Set<any> = new Set();
  primaryColor: string = 'var(--primary-color)';
  secondaryColor: string = 'var(--secondary-color)';
  router = inject(Router);
  @Input() class?: string = '';

  @Input() text?: string = '';
  @Input() textAlign?: 'left' | 'center' | 'right' = 'center';
  @Input() width?: string = '';
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

  @Input() isMenuButton?: boolean = false; // Add input for menu button
  @Input() menuItems?: ButtonConfig[];

  @Input() transparent?: boolean = false;
  @Input() border?: boolean = true;
  @Input() reverseColorsOnHover: boolean = false;

  @Input() navigate: boolean = false;
  @Input() url: string = '';
  @Input() validate?: () => boolean;

  @Input() active: boolean = false;
  @Input() id: string = '';

  loading: boolean = false;
  isValid: boolean = true;
  isPageLoading: boolean = true;
  hoveredItem: any = null;

  hover: boolean = false;

  ngOnInit() {
    this.validateButton();
    setTimeout(() => {
      this.isPageLoading = false;
    }, 2000);
  }

  isHovered(item: any): boolean {
    return this.hoveredItems.has(item);
  }
  onMouseEnter(item: any) {
    this.hoveredItems.add(item);
  }

  onMouseLeave(item: any) {
    setTimeout(() => {
      this.hoveredItems.delete(item);
    }, 300);
  }

  async handleClick(event: Event) {
    this.loading = true;
    try {
      if (this.onClick) {
        this.onClick(event);
      }

      if (this.url) {
        await this.router.navigate([this.url]);
      }
      // Case 1: If both click handler and navigation are needed
      if (this.buttonClick.observed && this.navigate && this.url) {
        await Promise.resolve(this.buttonClick.emit(this.id || ''));
        await this.router.navigate([this.url]);
      }
      // Case 2: Only click handler, no navigation
      else if (this.buttonClick.observed && !this.navigate) {
        await Promise.resolve(this.buttonClick.emit(this.id || ''));
      }
      // Case 3: Only navigation, no click handler
      else if (!this.buttonClick.observed && this.url) {
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

  getMergedStyles() {
    return {
      ...this.getButtonStyle(),
      ...(this.hover ? this.getHoverStyle() : {}), // ✅ Hover style conditionally add ho raha hai
      'border-radius': this.getBorderRadius(),
      width: this.width ? this.width : 'auto', // ✅ Width apply ho rahi hai
    };
  }

  getBorderRadius(): string {
    if (this.shape === 'circle') {
      return '50%';
    }
    return this.corners === 'rounded' ? '8px' : '0';
  }

  getButtonStyle() {
    const borderColor = this.secondaryColor;
    const borderRadius = this.getBorderRadius();

    const backgroundColor = this.transparent
      ? 'transparent'
      : this.primaryColor;

    if (this.icon && !this.text) {
      return {
        backgroundColor: this.secondaryColor,
        color: this.primaryColor,
        border: 'none',
        borderRadius: borderRadius,
      };
    }

    if (this.transparent && !this.border) {
      return {
        backgroundColor: 'transparent',
        color: this.primaryColor,
        border: 'none',
        borderRadius: borderRadius,
      };
    }

    if (!this.transparent && !this.border) {
      return {
        backgroundColor: this.primaryColor,
        color: 'white',
        border: 'none',
        borderRadius: borderRadius,
      };
    }
    if (this.transparent && this.border) {
      return {
        backgroundColor: 'transparent',
        color: this.secondaryColor,
        border: `2px solid ${borderColor}`,
        borderRadius: borderRadius,
        // padding: '9px 30px',
      };
    }
    if (!this.transparent && this.border) {
      return {
        backgroundColor: this.primaryColor,
        color: 'white',
        border: `2px solid ${borderColor}`,
        borderRadius: borderRadius,
        // padding: '9px 30px',
      };
    }
    return {
      backgroundColor: this.primaryColor,
      color: 'white',
      border: 'none',
      borderRadius: borderRadius,
    };
  }

  getHoverStyle() {
    const hoverColor = this.secondaryColor;
    const borderRadius = this.getBorderRadius();
    if (this.icon && !this.text) {
      return {
        backgroundColor: this.primaryColor,
        color: 'white',
        border: 'none',
        borderRadius: borderRadius,
      };
    }

    if (this.reverseColorsOnHover && !this.transparent && !this.border) {
      return {
        backgroundColor: this.secondaryColor,
        color: this.primaryColor,
        border: 'none',
        borderRadius: borderRadius,
      };
    }

    if (this.transparent && !this.border) {
      return {
        backgroundColor: 'transparent',
        color: hoverColor,
        border: 'none',
        borderRadius: borderRadius,
      };
    }

    if (!this.transparent && !this.border) {
      return {
        backgroundColor: hoverColor,
        color: 'white',
        border: 'none',
        borderRadius: borderRadius,
      };
    }

    if (this.transparent && this.border) {
      return {
        backgroundColor: this.secondaryColor,
        border: `2px solid ${this.secondaryColor}`,
        color: 'var(--white-text-color)',
        borderRadius: borderRadius,
        // padding: '9px 30px',
      };
    }

    if (!this.transparent && this.border) {
      return {
        backgroundColor: hoverColor,
        color: 'white',
        border: `2px solid ${hoverColor}`,
        borderRadius: borderRadius,
        // padding: '9px 30px',
      };
    }
    return {
      backgroundColor: hoverColor,
      color: 'white',
      border: 'none',
      borderRadius: borderRadius,
    };
  }
}
