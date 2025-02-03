import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonConfig } from './button.model';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
  @Input() text?: string = '';
  @Input() icon?: string = '';
  @Input() showIcon?: boolean = true;
  @Input() iconPosition?: 'left' | 'center' | 'right' | 'full' = 'left';
  @Output() buttonClick = new EventEmitter<void>();
  @Input() loadingData?: boolean = false;

  @Input() shape?: 'circle' | 'square' | 'rectangle' = 'rectangle';
  @Input() corners?: 'rounded' | 'squared' = 'rounded';

  @Input() foreground?: string = '';
  @Input() background?: string = '';
  @Input() shadow?: boolean = true;

  @Input() transparent?: boolean = false;

  // // New properties
  // @Input() width: string = 'auto'; // Default width
  // @Input() margin: string = '0'; // Default margin
  // @Input() justifyContent: string = 'flex-start'; // Default alignment

  loading: boolean = false;
  isValid: boolean = true;

  isPageLoading: boolean = true;

  primaryColor: string = '#1976d2'; // Default foreground (primary) color
  secondaryColor: string = '#90caf9'; // Default background (secondary) color

  ngOnInit() {
    this.validateButton();
    setTimeout(() => {
      this.isPageLoading = false;
    }, 2000);
  }

  handleClick() {
    this.loading = true;
    this.buttonClick.emit();

    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  getBorderRadius(): string {
    if (this.shape === 'circle') {
      return '50%';
    }
    return this.corners === 'rounded' ? '8px' : '0';
  }

  validateButton() {
    if (!this.text && !this.icon) {
      throw new Error(
        'Button validation failed: At least an icon or text must be provided.'
      );
    }
  }

  get hasIcon(): boolean {
    return !!this.icon;
  }

  get hasText(): boolean {
    return !!this.text;
  }
}
