import { Component, Input } from '@angular/core';
import { CardGridConfig } from '../card-collection-component/card.modal';
import { CommonModule } from '@angular/common';
import { CardGridComponentComponent } from '../card-for-grid-component/card-for-grid-component';

@Component({
  selector: 'app-grid-view',
  standalone: true,
  imports: [CommonModule, CardGridComponentComponent],
  templateUrl: './grid-view.component.html',
  styleUrl: './grid-view.component.css',
})
export class GridViewComponent {
  @Input() cardGridConfig!: CardGridConfig;
}
