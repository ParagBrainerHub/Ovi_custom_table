import { Component } from '@angular/core';
import { FormConfig } from '../../../form-component/form-modal';
import { FormComponentComponent } from '../../../form-component/form-component.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormComponentComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  formConfigForChangePassword: FormConfig = {
    formTitle: 'Change Password',
    formTitleStyles: { color: '#DD8208' },
    formSubTitle: 'Update your password securely',
    isImageShow: false,
    formWidth: 100,
    backgroundColor: 'transparent',
    fields: [
      {
        type: 'password',
        label: 'Current Password',
        key: 'currentPassword',
        width: '100%',
        placeholder: 'Enter your current password',
        required: true,
        validation: {
          minLength: 6,
        },
        errorMessages: {
          required: 'Current password is required.',
          minLength: 'Password must be at least 6 characters long.',
        },
      },
      {
        type: 'password',
        label: 'New Password',
        key: 'newPassword',
        width: '100%',
        placeholder: 'Enter a new password',
        required: true,
        validation: {
          minLength: 6,
        },
        errorMessages: {
          required: 'New password is required.',
          minLength: 'Password must be at least 6 characters long.',
        },
      },
      {
        type: 'password',
        label: 'Confirm Password',
        key: 'confirmPassword',
        width: '100%',
        placeholder: 'Re-enter new password',
        required: true,
        validation: {
          match: 'newPassword', // Ensure it matches the new password
        },
        errorMessages: {
          required: 'Confirm password is required.',
          match: 'Passwords do not match.',
        },
      },
    ],
    submitButtonConfig: {
      text: 'Change Password',
      icon: 'lock',
      showIcon: true,
      hasBorder: false,
      iconPosition: 'right',
      foregroundColor: '#ffffff',
      backgroundColor: '#DD8208',
      shadow: true,
      shape: 'rectangle',
      corners: 'rounded',
      transparent: false,
      width: '100%',
      action: () => this.onChangePassword(),
    },
  };

  onChangePassword() {
    console.log('Password change request submitted');
    // Implement API call for password change
  }
}
