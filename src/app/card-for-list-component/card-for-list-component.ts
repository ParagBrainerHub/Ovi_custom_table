import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  CardConfig,
  DynamicComponentConfig,
} from '../card-collection-component/card.modal';
import { User } from '../home-page/home-page.component';
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
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
} from '@angular/platform-browser';
import { SafeUrlPipe } from '../safe-url.pipe';
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
    SafeUrlPipe,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: './card-for-list-component.html',
  styleUrl: './card-for-list-component.css',
})
export class CardListComponentComponent implements OnInit {
  @Input() cards: CardConfig[] = [];

  @Input() isGrid?: boolean;

  @Input() cardConfig?: CardConfig;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;
  safeUrl!: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  loading = true;

  ngOnInit() {
    console.log('this.cardConfig: ', this.cardConfig);
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.cardConfig?.iframeUrl ?? ''
    );
    console.log(this.cardConfig, 'papa ki pari ');
    setTimeout(() => {
      this.loading = false;
    }, 2000);

    this.validateFooterConfig(this.cardConfig?.footer);

    this.validateBodyConfig(this.cardConfig?.body);

    this.validateCardConfig(this.cardConfig!);
  }

  ngAfterViewInit() {
    if (this.cardConfig?.dynamicComponents?.length) {
      this.loadDynamicComponents(this.cardConfig.dynamicComponents);
    }
  }

  loadDynamicComponents(components: DynamicComponentConfig[]) {
    this.container.clear();
    components.forEach(
      ({ dynamicComponent, dynamicComponentConfig }, index) => {
        console.log(`Loading component #${index + 1}:`, dynamicComponent);
        const componentRef = this.container.createComponent(dynamicComponent);

        if (dynamicComponentConfig) {
          Object.assign(componentRef.instance, dynamicComponentConfig);
          console.log(
            `Config applied for component #${index + 1}:`,
            dynamicComponentConfig
          );
        }
      }
    );
  }

  // image alignment
  getImageAlignmentClass(): string {
    return this.cardConfig?.imageAlignment === 'right'
      ? 'image-right'
      : 'image-left';
  }
  // image section width
  getSectionWidths(): { imageWidth: string; contentWidth: string } {
    const [imgWidth, contentWidth] = this.cardConfig?.sectionWidths || [30, 70]; // Default 50-50
    return {
      imageWidth: `${imgWidth}%`,
      contentWidth: `${contentWidth}%`,
    };
  }
  // card style
  get cardStyles(): { [key: string]: string } {
    return {
      width: '100%',
      border: this.cardConfig?.hasBorder ? '1px solid #ccc' : 'none',
      ...(this.cardConfig?.customStyles || {}),
    };
  }

  highlightText(text: string = ''): SafeHtml {
    if (!text) return '';

    // ✅ Regex for detecting color values inside <span color="...">
    const updatedText = text.replace(
      /<span\s+color=["']?(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|\w+)["']?>(.*?)<\/span>/g,
      `<span style="color: $1; font-weight: bold;">$2</span>`
    );

    return this.sanitizer.bypassSecurityTrustHtml(updatedText);
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
      return;
    }
    if (!footer.type || (footer.type !== 'text' && footer.type !== 'buttons')) {
      return;
    }
    if (footer.type === 'text') {
      if (!footer.text || footer.text.trim() === '') {
      }
    }
    if (footer.type === 'buttons') {
      if (
        !footer.buttons ||
        !Array.isArray(footer.buttons) ||
        footer.buttons.length === 0
      ) {
      }
    }
  }

  //Body Validation
  validateBodyConfig(body: any): void {
    if (!body) {
      return;
    }
    if (!body.type) {
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
