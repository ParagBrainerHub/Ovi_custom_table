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

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    SafeUrlPipe,
    MatIconModule,
    SafeHtmlPipe,
    RouterModule,
    CustomButtonComponent,
    // PopupComponent,
    // NavbarComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() footerConfig!: FooterConfig;
}
