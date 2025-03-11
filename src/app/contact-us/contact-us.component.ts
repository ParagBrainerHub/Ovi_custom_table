import { Component, Input } from '@angular/core';
import { FormComponentComponent } from '../form-component/form-component.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormComponentComponent, MatIconModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  @Input() formConfig: any;
  isOpen = false; // Local state for modal

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  onSubmit(data: any) {
    console.log('Contact Form Data:', data);
    this.closeModal();
  }
}
