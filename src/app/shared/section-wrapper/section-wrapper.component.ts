import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-wrapper.component.html',
  styleUrl: './section-wrapper.component.css',
})
export class SectionWrapperComponent {
  @Input() images: {
    src: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  }[] = [];
  @Input() customClass: string = ''; // Accepting class from parent
  @Input() customStyles: { [key: string]: string } = {};
}
