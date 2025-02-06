import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent implements AfterViewInit {
  @Input() config: any;
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;

  ngAfterViewInit(): void {
    new Swiper(this.swiperContainer.nativeElement, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 10,
      loop: this.loop,
      speed: this.speed,
      autoplay: this.autoplay
        ? {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }
        : false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: { el: '.swiper-pagination', clickable: true },
    });
  }

  get images(): any[] {
    return this.config?.images || [];
  }

  get autoplay(): boolean {
    return this.config?.autoplay ?? true;
  }

  get loop(): boolean {
    return this.config?.loop ?? true;
  }

  get speed(): number {
    return this.config?.speed ?? 500;
  }
}
