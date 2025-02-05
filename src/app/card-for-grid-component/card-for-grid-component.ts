import { Component, Input } from '@angular/core';
import { CardConfig } from '../card-collection-component/card.modal';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CustomButtonComponent } from '../button-component/custom-button.component';
import { CustomMaterialTableComponent } from '../custom-material-table/custom-material-table.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TableConfig } from '../custom-table/table-column.model';
import { User } from '../app.component';

@Component({
  selector: 'app-card-grid-component',
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
  templateUrl: './card-for-grid-component.html',
  styleUrl: './card-for-grid-component.css',
})
export class CardGridComponentComponent {
  @Input() cards: CardConfig[] = [];

  @Input() isGrid?: boolean;

  @Input() cardConfig?: CardConfig;

  // @Input() config!: TableConfig;

  loading = true;

  tableConfig: TableConfig = {
    isHeader: true,
    columns: [
      {
        key: 'name',
        title: 'Name',
        order: 1,
        type: 'text',
        minWidth: '150px',
        maxWidth: '250px',
        alignment: 'left',
      },
      {
        key: 'email',
        title: 'Email',
        order: 2,
        type: 'text',
        minWidth: '150px',
        maxWidth: '250px',
        alignment: 'left',
      },
      {
        key: 'role',
        title: 'User Role',
        order: 3,
        type: 'text',
        minWidth: '150px',
        maxWidth: '250px',
        alignment: 'left',
      },
      {
        key: 'imageUrl',
        title: 'Profile Picture',
        order: 4,
        type: 'image',
        minWidth: '150px',
        maxWidth: '250px',
        alignment: 'left',
      },
      {
        key: 'videoUrl',
        title: 'Profile Video',
        order: 5,
        type: 'video',
        minWidth: '150px',
        maxWidth: '250px',
        alignment: 'left',
      },
    ],
    itemsPerPage: 5,
    maxItemsOptions: [5, 10, 15],
    actions: [
      {
        text: 'Edit',
        icon: '✏️',
        showIcon: true,
        iconPosition: 'left',
        onClick: this.editUser.bind(this),
        shape: 'square',
        corners: 'rounded',
        foreground: '#ffffff',
        background: '#1976d2',
        shadow: true,
        transparent: false,
      },
      {
        text: 'Delete',
        icon: '❌',
        showIcon: true,
        iconPosition: 'right',
        onClick: this.deleteUser.bind(this),
        shape: 'square',
        corners: 'squared',
        foreground: '#ff0000',
        background: '#000000',
        shadow: false,
        transparent: true,
      },
      {
        text: '',
        icon: '✅',
        showIcon: true,
        iconPosition: 'left',
        onClick: this.deleteUser.bind(this),
        shape: 'rectangle',
        corners: 'rounded',
        transparent: false,
      },
    ],
    rowHeight: '50px',
    maxRowHeight: '200px',
    columnAlignments: {
      name: 'left',
      email: 'left',
      role: 'left',
      imageUrl: 'left',
      videoUrl: 'left',
    },
    filterAlignment: 'center',
    showFilter: true,
    filterWidth: '500px',
    margin: '20px',
    elementSpacing: '10px',
  };

  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      imageUrl: 'https://picsum.photos/200/300',
      imageLoading: true,
      actions: [
        {
          text: 'Edit',
          icon: '✏️',
          showIcon: true,
          iconPosition: 'left',
          onClick: this.editUser.bind(this),
        },
      ],
      rowAlignments: { name: 'center', email: 'right' },
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      imageUrl: 'https://picsum.photos/200/300',
      imageLoading: true,
      videoUrl: 'path-to-video.mp4',
      actions: [
        {
          text: 'Delete',
          icon: '❌',
          showIcon: true,
          iconPosition: 'left',
          onClick: this.deleteUser.bind(this),
        },
      ],
    },
    {
      id: 3,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      imageUrl: 'https://picsum.photos/200/300',
      videoLoading: true,
      videoUrl:
        'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 6,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      imageUrl: 'https://picsum.photos/200/300',
    },
  ];

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
      console.log('CardConfig is valid: Title + Image or Description');
      return;
    }

    if (hasImage && hasImageDescription) {
      console.log('CardConfig is valid: Image + Description');
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
