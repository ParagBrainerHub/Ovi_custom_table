import { Component, Input } from '@angular/core';
import { CardListConfig } from '../card-collection-component/card.modal';
import { CommonModule } from '@angular/common';
import { CardListComponentComponent } from '../card-for-list-component/card-for-list-component';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CommonModule, CardListComponentComponent],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
  @Input() cardListConfig!: CardListConfig;
}
