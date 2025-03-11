import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shape-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shape-wrapper.component.html',
  styleUrl: './shape-wrapper.component.css',
})
export class ShapeWrapperComponent {
  @Input() shapes: {
    type:
      | 'rectangle'
      | 'oval'
      | 'circle'
      | 'square'
      | 'triangle'
      | 'hexagon'
      | 'pentagon';
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    styles?: { [key: string]: string };
  }[] = [];
  @Input() customClass: string = '';
  @Input() customStyles: { [key: string]: string } = {};
}
