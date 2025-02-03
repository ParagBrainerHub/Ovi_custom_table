import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from '../button-component/custom-button.component';
import { CarouselButtonsConfig } from '../navbar/navbar-modal';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent, MatProgressSpinnerModule],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css',
})
export class ImageCarouselComponent {
  @Input() images: string[] = [];
  @Input() autoplay = true;
  @Input() forcePagination = false;
  @Input() buttonConfig?: CarouselButtonsConfig;
  currentIndex = 0;
  currentPage = 0;
  itemsPerPage = 10;
  totalPages = 1;
  isImageLoading = false;
  ngOnInit() {
    if (this.autoplay) {
      setInterval(() => this.next(), 3500);
    }
    this.totalPages = Math.ceil(this.images.length / this.itemsPerPage);
  }
  loadNextImage() {
    this.showSpinnerWithImageLoad(() => this.next());
  }
  loadPreviousImage() {
    this.showSpinnerWithImageLoad(() => this.prev());
  }
  private showSpinnerWithImageLoad(action: () => void) {
    this.isImageLoading = true;
    setTimeout(() => {
      action();
      this.isImageLoading = false;
    }, 500);
  }
  prev() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  }
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  goToIndex(index: number) {
    this.currentIndex = index;
  }
  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateCurrentIndexForPage();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateCurrentIndexForPage();
    }
  }
  private updateCurrentIndexForPage() {
    this.currentIndex = this.currentPage * this.itemsPerPage;
  }
  // images: string[] = [
  //   'https://picsum.photos/id/237/600/300',
  //   'https://picsum.photos/id/238/600/300',
  //   'https://picsum.photos/id/239/600/300',
  //   'https://picsum.photos/id/240/600/300',
  //   'https://picsum.photos/id/241/600/300',
  // ];
  // currentIndex: number = 0;
  // showPrevImage(): void {
  //   this.currentIndex =
  //     this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  // }
  // showNextImage(): void {
  //   this.currentIndex =
  //     this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
  // }
  // goToImage(index: number): void {
  //   this.currentIndex = index;
  // }
}
