import { Component, Input, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { CardConfig } from './card.modal';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CustomButtonComponent } from '../button-component/custom-button.component';
import { CustomMaterialTableComponent } from '../custom-material-table/custom-material-table.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardGridComponentComponent } from '../card-for-grid-component/card-for-grid-component';
import { CardListComponentComponent } from '../card-for-list-component/card-for-list-component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-card-component',
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
    CardGridComponentComponent,
    CardListComponentComponent,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  templateUrl: './card-collection-component.html',
  styleUrl: './card-collection-component.css',
})
export class CardComponentComponent {
  @Input() isGrid?: boolean;

  readonly cardConfigs = input<CardConfig[]>([]);

  readonly width = input<string>();

  checked = true;
  disabled = false;
  loading = true;

  onToggleChange() {
    this.isGrid = !this.isGrid;
  }

  trackById(index: number, item: CardConfig): number {
    return index;
  }
}
