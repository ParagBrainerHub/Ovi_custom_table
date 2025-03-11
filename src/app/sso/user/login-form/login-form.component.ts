import { Component } from '@angular/core';
import { FormComponentComponent } from '../../../form-component/form-component.component';
import { FormConfig } from '../../../form-component/form-modal';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormComponentComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  formConfigForLogin: FormConfig = {
    formTitle: 'Login',
    formTitleStyles: { color: '#DD8208' },
    formSubTitle: 'Enter your credentials to access your account',
    isImageShow: false,
    formWidth: 100,
    backgroundColor: 'transparent',
    fields: [
      {
        type: 'email',
        label: 'Email',
        key: 'email',
        placeholder: 'Enter your email',
        width: '100%',
        required: true,
        validation: {
          pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
        },
        errorMessages: {
          required: 'Email is required.',
          pattern: 'Enter a valid email address.',
        },
      },
      {
        type: 'password',
        label: 'Password',
        key: 'password',
        width: '100%',
        placeholder: 'Enter your password',
        required: true,
        isPasswordVisible: false,
        validation: {
          minLength: 6,
        },
        errorMessages: {
          required: 'Password is required.',
          minLength: 'Password must be at least 6 characters long.',
        },
      },
    ],
    submitButtonConfig: {
      text: 'Login',
      icon: 'login',
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
    },
  };

  onLogin(formValues: any) {
    console.log('event: ', formValues);
  }

  onGoogleLogin() {
    console.log('Google Login Clicked');
    // Implement Google login logic here
  }

  onFacebookLogin() {
    console.log('Facebook Login Clicked');
    // Implement Facebook login logic here
  }

  onTwitterLogin() {
    console.log('Twitter Login Clicked');
    // Implement Twitter login logic here
  }
}
