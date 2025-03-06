import { Component } from '@angular/core';
import { FormComponentComponent } from '../../form-component/form-component.component';
import { FormConfig } from '../../form-component/form-modal';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormComponentComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  formConfigForSignup: FormConfig = {
    formTitle: 'Register',
    formTitleStyles: { color: '#dd8208' },
    formSubTitle: 'Create an account to get started',
    isImageShow: false,
    formWidth: 100,
    backgroundColor: 'transparent',
    fields: [
      {
        type: 'text',
        label: 'First Name',
        key: 'firstName',
        placeholder: 'Enter your first name',
        required: true,
        width: '100%',
        validation: {
          minLength: 2,
          maxLength: 30,
        },
        errorMessages: {
          required: 'First name is required.',
          minLength: 'First name must be at least 2 characters long.',
          maxLength: 'First name cannot exceed 30 characters.',
        },
      },
      {
        type: 'text',
        label: 'Last Name',
        key: 'lastName',
        placeholder: 'Enter your last name',
        required: true,
        width: '100%',
        validation: {
          minLength: 2,
          maxLength: 30,
        },
        errorMessages: {
          required: 'Last name is required.',
          minLength: 'Last name must be at least 2 characters long.',
          maxLength: 'Last name cannot exceed 30 characters.',
        },
      },
      {
        type: 'email',
        label: 'Email',
        key: 'email',
        placeholder: 'Enter your email',
        required: true,
        width: '100%',
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
        placeholder: 'Enter your password',
        required: true,
        width: '100%',
        isPasswordVisible: false,
        validation: {
          minLength: 6,
        },
        errorMessages: {
          required: 'Password is required.',
          minLength: 'Password must be at least 6 characters long.',
        },
      },
      {
        type: 'password',
        label: 'Confirm Password',
        key: 'confirmPassword',
        placeholder: 'Re-enter your password',
        required: true,
        width: '100%',
        isPasswordVisible: false,
        validation: {
          match: 'password',
        },
        errorMessages: {
          required: 'Confirm password is required.',
          match: 'Passwords do not match.',
        },
      },
    ],
    submitButtonConfig: {
      text: 'Register',
      icon: 'person_add',
      showIcon: true,
      hasBorder: false,
      iconPosition: 'right',
      foregroundColor: '#ffffff',
      backgroundColor: '#dd8208',
      shadow: true,
      shape: 'rectangle',
      corners: 'rounded',
      transparent: false,
      width: '100%',
    },
  };

  onSignup(event: Event) {
    console.log('event: ', event);
    console.log('Signup button clicked');
    // Implement signup logic here
  }
}
