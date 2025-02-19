import { Component, Input } from '@angular/core';
import { CardConfig } from '../card-collection-component/card.modal';
import { User } from '../app.component';
// import { TableConfig } from '../custom-table/table-column.model';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CustomButtonComponent } from '../button-component/custom-button.component';
import { CustomMaterialTableComponent } from '../custom-material-table/custom-material-table.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TableConfig } from '../custom-material-table/material-table-column.model';

@Component({
  selector: 'app-card-list-component',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    CommonModule,
    MatIconModule,
    CustomButtonComponent,
    CustomMaterialTableComponent,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: './card-for-list-component.html',
  styleUrl: './card-for-list-component.css',
})
export class CardListComponentComponent {
  @Input() cards: CardConfig[] = [];

  @Input() isGrid?: boolean;

  @Input() cardConfig?: CardConfig;

  loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);

    this.validateFooterConfig(this.cardConfig?.footer);

    this.validateBodyConfig(this.cardConfig?.body);

    this.validateCardConfig(this.cardConfig!);
  }

  // Card Width
  get cardWidth(): string {
    if (this.cardConfig?.layout === 'grid') {
      return `${this.cardConfig.width || 250}px`;
    } else if (this.cardConfig?.layout === 'list') {
      return '100%';
    }
    return 'auto';
  }

  getImagePositionClass(): string {
    switch (this.cardConfig?.image?.position) {
      case 'background':
        return 'image-background';
      case 'top-half':
        return 'image-top-half';
      case 'middle':
        return 'image-middle';
      case 'bottom-half':
        return 'image-bottom-half';
      case 'square-under-title':
        return 'image-square-under-title';
      case 'rectangle-under-title':
        return 'image-rectangle-under-title';
      case 'dark-background-title':
        return 'image-dark-background-title';
      default:
        return '';
    }
  }

  getButtonsByGroup(group: 'left' | 'right' | 'center') {
    return (
      this.cardConfig?.footer?.buttons?.filter(
        (button) => button.group === group || button.align === group
      ) || []
    );
  }

  hasButtonGroup(group: 'left' | 'right' | 'center'): boolean {
    return this.getButtonsByGroup(group).length > 0;
  }

  getTextAlignmentClass(): string {
    switch (this.cardConfig?.footer?.align) {
      case 'left':
        return 'footer-text-left';
      case 'center':
        return 'footer-text-center';
      case 'right':
        return 'footer-text-right';
      case 'multi-column':
        return 'footer-text-multi-column';
      default:
        return '';
    }
  }

  //Footer Validation
  validateFooterConfig(footer: any): void {
    if (!footer) {
      console.error('Footer is not defined in the CardConfig.');
      return;
    }
    if (!footer.type || (footer.type !== 'text' && footer.type !== 'buttons')) {
      console.error(
        "Invalid footer type. The 'type' property must be either 'text' or 'buttons'."
      );
      return;
    }
    if (footer.type === 'text') {
      if (!footer.text || footer.text.trim() === '') {
        console.error("Footer text cannot be empty when 'type' is 'text'.");
      }
    }
    if (footer.type === 'buttons') {
      if (
        !footer.buttons ||
        !Array.isArray(footer.buttons) ||
        footer.buttons.length === 0
      ) {
        console.error(
          "Footer must contain at least one button when 'type' is 'buttons'."
        );
      }
    }
  }

  //Body Validation
  validateBodyConfig(body: any): void {
    if (!body) {
      console.error('Body is not defined in the CardConfig.');
      return;
    }
    if (!body.type) {
      console.error(
        "Invalid body configuration. The 'type' property is required."
      );
      return;
    }
    if (body.type === 'text' && (!body.content || body.content.trim() === '')) {
      console.error("Body content cannot be empty when 'type' is 'text'.");
      return;
    }
    if (
      body.type === 'table' &&
      (!body.tableData || body.tableData.length === 0)
    ) {
      console.error(
        "Body must contain valid table data when 'type' is 'table'."
      );
      return;
    }
  }

  //Card Config Validation for Header, Image and Description.
  validateCardConfig(cardConfig: CardConfig): void {
    const hasTitle = !!(cardConfig.header && cardConfig.header.title);
    const hasImage = !!(cardConfig.image && cardConfig.image.src);
    const hasImageDescription = !!(
      cardConfig.image && cardConfig.image.description
    );
    const hasContentDescription = !!(
      cardConfig.content && cardConfig.content.description
    );

    if (hasTitle && (hasImage || hasContentDescription)) {
      return;
    }

    if (hasImage && hasImageDescription) {
      return;
    }
    console.error(
      'Invalid CardConfig: At least a title with an image or description, or an image with a description is required.'
    );
  }

  editUser(user: User) {
    console.log('Editing user:', user);
  }

  deleteUser(user: User) {
    console.log('Deleting user:', user);
  }

  onEdit() {
    console.log('Edit button clicked');
  }

  onDelete() {
    console.log('Delete button clicked');
  }

  onMoreInfo() {
    console.log('More info button clicked');
  }

  onCancel() {
    console.log('Cancel button clicked');
  }

  onSubmit() {
    console.log('Submit button clicked');
  }
}
