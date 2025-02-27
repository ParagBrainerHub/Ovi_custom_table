import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormComponentComponent } from '../form-component/form-component.component';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormComponentComponent],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css',
})
export class SubscribeComponent {
  @Input() formConfig: any;
  isOpen = false; // Local state for modal

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  onSubmit(data: any) {
    console.log('Subscription Data:', data);
    this.closeModal();
  }
}
