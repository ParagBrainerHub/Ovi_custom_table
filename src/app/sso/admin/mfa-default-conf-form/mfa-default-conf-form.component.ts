import { Component } from '@angular/core';
import { FormConfig } from '../../../form-component/form-modal';
import { FormComponentComponent } from '../../../form-component/form-component.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mfa-default-conf-form',
  standalone: true,
  imports: [FormComponentComponent],
  templateUrl: './mfa-default-conf-form.component.html',
  styleUrl: './mfa-default-conf-form.component.css',
})
export class MfaDefaultConfFormComponent {
  constructor(private location: Location) {}
  formConfig: FormConfig = {
    formTitle: 'Default MFA Configuration',
    isImageShow: false,
    formWidth: 100,
    backgroundColor: 'transparent',
    fields: [
      {
        type: 'radio',
        label: 'Default MFA Method:',
        key: 'mfaMethod',
        options: [
          { key: 'none', label: 'None', value: 'none' },
          { key: 'authApp', label: 'Authenticator App', value: 'authApp' },
          { key: 'email', label: 'Email', value: 'email' },
          { key: 'sms', label: 'SMS', value: 'sms' },
        ],
        required: true,
      },
    ],
    submitButtonConfig: {
      text: 'Save Configuration',
      backgroundColor: '#DD8208',
      foregroundColor: '#ffffff',
      hasBorder: false,
    },
  };

  onSetdefaultMFAvalue(event: any) {
    console.log('event: ', event);
  }

  onCancel() {
    this.location.back();
  }
}
