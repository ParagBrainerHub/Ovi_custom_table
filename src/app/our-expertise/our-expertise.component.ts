import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-our-expertise',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './our-expertise.component.html',
  styleUrl: './our-expertise.component.css',
})
export class OurExpertiseComponent {
  @Input() expertiseList: string[] = [];
}
