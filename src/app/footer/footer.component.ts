import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FooterConfig } from './footer.modal';
import { SafeUrlPipe } from '../safe-url.pipe';
import { MatIconModule } from '@angular/material/icon';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { RouterModule } from '@angular/router';
import { CustomButtonComponent } from '../button-component/custom-button.component';
import { PopupComponent } from '../popup/popup.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormConfig } from '../form-component/form-modal';
import { FormComponentComponent } from '../form-component/form-component.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    SafeUrlPipe,
    MatIconModule,
    RouterModule,
    SubscribeComponent,
    ContactUsComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() footerConfig!: FooterConfig;
  @Input() contactFormConfig!: FormConfig;
  @Input() subscribeFormConfig!: FormConfig;

  isContactusModalOpen: boolean = false;
  isSubscriptionModalOpen: boolean = false;

  openSubscriptionModal() {
    this.isSubscriptionModalOpen = true;
  }

  openContctusModal() {
    this.isContactusModalOpen = true;
  }

  closeSubscriptionModal() {
    this.isSubscriptionModalOpen = false;
  }
  closeContactModal() {
    this.isContactusModalOpen = false;
  }

  onContactFormSubmit(data: any) {
    console.log('Form data contact ', data);
  }
  onSubscribeFormSubmit(data: any) {
    console.log('Form data subcribtion ', data);
  }
}
