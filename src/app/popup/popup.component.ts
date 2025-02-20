import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CustomButtonComponent } from '../button-component/custom-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopupConfig } from './popup-modal';
import { FormComponentComponent } from '../form-component/form-component.component';
import { FormConfig } from '../form-component/form-modal';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
    CustomButtonComponent,
    CommonModule,
    FormsModule,
    FormComponentComponent,
  ],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent implements OnInit {
  @Input() popupConfig!: PopupConfig;
  @Input() showEmailField = false;
  @Input() formConfig?: FormConfig;

  defaultFormConfig: FormConfig = {
    fields: [],
    formWidth: 100,
  };

  @Output() popupClosed = new EventEmitter<void>();

  email = '';
  isValidEmail = true;
  emailTouched = false;
  useFormComponent = false;

  ngOnInit() {
    this.resetState();
    this.useFormComponent =
      this.popupConfig.type === 'freeForm' && !!this.formConfig;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['popupConfig']) {
      this.resetState();
      this.useFormComponent =
        this.popupConfig.type === 'freeForm' && !!this.formConfig;
    }
  }

  get safeFormConfig(): FormConfig {
    return this.formConfig || this.defaultFormConfig;
  }

  resetState() {
    this.email = '';
    this.isValidEmail = true;
    this.emailTouched = false;
  }

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailTouched = true;
    this.isValidEmail = emailRegex.test(this.email);
  }

  closePopup() {
    this.popupClosed.emit();
  }
}
