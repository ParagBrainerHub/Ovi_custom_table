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
    'img-class'?: string;
    imgStyles?: { [key: string]: string };
  }[] = [];
  @Input() customClass: string = '';
  @Input() customStyles: { [key: string]: string } = {};
}
