import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomButtonComponent } from '../button-component/custom-button.component';
import { TabButtonConfig } from '../button-component/button.model';

@Component({
  selector: 'app-tab-button',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './tab-button.component.html',
  styleUrl: './tab-button.component.css',
})
export class TabButtonComponent {
  @Input() options: TabButtonConfig[] = [];
  @Input() isSingleOption: boolean = false;
  @Output() selectedValues = new EventEmitter<string[]>();

  selected: string[] = ['grid'];

  toggleSelection(value: string) {
    console.log(this.selected, 'selected');

    if (this.isSingleOption) {
      // Single selection mode
      this.selected = [value];
    } else {
      // Multi-selection mode
      if (this.selected.includes(value)) {
        this.selected = this.selected.filter((item) => item !== value);
      } else {
        this.selected.push(value);
      }
    }
    this.selectedValues.emit(this.selected);
  }
}
