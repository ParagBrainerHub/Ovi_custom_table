import { Component } from '@angular/core';
import { FormConfig } from '../../../form-component/form-modal';
import { FormComponentComponent } from '../../../form-component/form-component.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mfa-for-users-form',
  standalone: true,
  imports: [FormComponentComponent],
  templateUrl: './mfa-for-users-form.component.html',
  styleUrl: './mfa-for-users-form.component.css',
})
export class MfaForUsersFormComponent {
  constructor(private location: Location) {}
  formConfig: FormConfig = {
    formTitle: 'Enforce MFA for All Users',
    formWidth: 100,
    isImageShow: false,
    backgroundColor: 'transparent',
    fields: [
      {
        type: 'radio',
        label: 'Enforce Multi-Factor Authentication for:',
        key: 'mfaEnforcement',
        options: [
          {
            key: 'allUsers',
            label: 'All users in this app',
            value: 'allUsers',
          },
          {
            key: 'specificRoles',
            label: 'Only specific user roles',
            value: 'specificRoles',
          },
        ],
        required: true,
      },
    ],
    submitButtonConfig: {
      text: 'Enforce MFA',
      backgroundColor: '#DD8208',
      foregroundColor: '#ffffff',
      hasBorder: false,
    },
  };

  onSetUserMFAvalue(event: any) {
    console.log('event: ', event);
  }

  onCancel() {
    this.location.back();
  }
}
