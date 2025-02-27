import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { WrapperInterface } from '../../modals';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent implements OnInit {
  @Input() customClass: string = '';
  @Input() customStyle: { [key: string]: string } = {};
  @Input() wrapperConfig!: WrapperInterface;

  ngOnInit(): void {
    console.log('this.customClass: ', this.customClass);
  }
}
