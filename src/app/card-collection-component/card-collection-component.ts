import {
  Component,
  Input,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { CardConfig, CardGridConfig, CardListConfig } from './card.modal';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardGridComponentComponent } from '../card-for-grid-component/card-for-grid-component';
import { CardListComponentComponent } from '../card-for-list-component/card-for-list-component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TabButtonComponent } from '../tab-button/tab-button.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CarouselButtonsConfig } from '../image-carousel/image-carousel.modal';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GridViewComponent } from '../grid-view/grid-view.component';
import { ListViewComponent } from '../list-view/list-view.component';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    CommonModule,
    MatIconModule,
    NgxSkeletonLoaderModule,
    CardGridComponentComponent,
    CardListComponentComponent,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatIconModule,
    TabButtonComponent,
    CarouselComponent,
    GridViewComponent,
    ListViewComponent,
  ],
  templateUrl: './card-collection-component.html',
  styleUrl: './card-collection-component.css',
})
export class CardComponentComponent implements OnChanges, OnInit {
  @Input() isGrid: boolean = false;
  @Input() cardGridConfig!: CardGridConfig;
  @Input() cardListConfig!: CardListConfig;
  @Input() carouselConfig = [];

  constructor(private sanitizer: DomSanitizer) {}

  readonly width = input<string>();

  checked = true;
  disabled = false;
  loading = true;

  // tab change start

  tabOptions = [
    { label: 'Grid View', value: 'grid', icon: 'grid_view' },
    { label: 'List View', value: 'list', icon: 'list' },
    { label: 'Settings', value: 'settings' },
    // { label: 'Notifications', value: 'notifications' },
    // { label: 'Help', value: 'help' },
  ];

  selectedTabs: string[] = ['grid'];

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}

  onTabChange(selected: string[]) {
    this.selectedTabs = [...selected];
  }

  // tab change stop

  onToggleChange() {
    this.isGrid = !this.isGrid;
  }

  trackById(index: number, item: CardConfig): number {
    return index;
  }

  highlightText(text: string = ''): SafeHtml {
    if (!text) return '';
    const updatedText = text.replace(
      /<span\s+color=["']?(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|\w+)["']?>(.*?)<\/span>/g,
      `<span style="color: $1; font-weight: bold;">$2</span>`
    );
    return this.sanitizer.bypassSecurityTrustHtml(updatedText);
  }
}
