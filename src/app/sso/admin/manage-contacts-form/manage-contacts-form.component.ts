import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormConfig } from '../../../form-component/form-modal';
import { FormComponentComponent } from '../../../form-component/form-component.component';
import {
  TableColumn,
  TableConfig,
} from '../../../custom-material-table/material-table-column.model';
import { CustomMaterialTableComponent } from '../../../custom-material-table/custom-material-table.component';
import { CommonModule } from '@angular/common';
import { ManageContactKeys } from './manage-contacts-form.model';

@Component({
  selector: 'app-manage-contacts-form',
  standalone: true,
  imports: [FormComponentComponent, CustomMaterialTableComponent, CommonModule],
  templateUrl: './manage-contacts-form.component.html',
  styleUrl: './manage-contacts-form.component.css',
})
export class ManageContactsFormComponent {
  @ViewChild(FormComponentComponent) formComponent!: FormComponentComponent;
  contacts: any[] = [];
  isNewTable: boolean = true;

  generateColumns = (formFields: any[]): TableColumn[] => {
    return formFields
      .filter((field) => field.key !== 'password')
      .map((field, index) => ({
        key: field.key,
        title: field.label,
        order: index + 1,
        type: 'text',
        minWidth: '150px',
        maxWidth: '250px',
        alignment: 'left',
      }));
  };

  formConfigForManageContact: FormConfig = {
    formTitle: 'Manage Contact',
    formTitleStyles: { color: '#DD8208' },
    formSubTitle: 'Update your contact details and preferences',
    isImageShow: false,
    formWidth: 100,
    backgroundColor: 'transparent',
    fields: [
      // **Basic Details**
      {
        type: 'text',
        label: 'Name',
        key: 'name',
        placeholder: 'Enter your name',
        required: true,
        width: '32%',
        errorMessages: { required: 'Name is required.' },
      },
      {
        type: 'email',
        label: 'Email',
        key: 'email',
        placeholder: 'Enter your email',
        required: true,
        width: '32%',
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
        width: '32%',
        validation: {
          minLength: 6,
        },
        errorMessages: {
          required: 'Password is required.',
          minLength: 'Password must be at least 6 characters long.',
        },
      },

      // **SMTP Configuration**
      {
        type: 'text',
        label: 'SMTP Host',
        key: 'smtpHost',
        placeholder: 'Enter SMTP Host',
        required: true,
        width: '32%',
        errorMessages: { required: 'SMTP Host is required.' },
      },
      {
        type: 'number',
        label: 'SMTP Port',
        key: 'smtpPort',
        placeholder: 'Enter SMTP Port',
        required: true,
        width: '32%',
        errorMessages: { required: 'SMTP Port is required.' },
      },
      {
        type: 'radio',
        label: 'SSH Enabled',
        key: 'sshEnabled',
        options: [
          { key: 'yes', label: 'Yes', value: true },
          { key: 'no', label: 'No', value: false },
        ],
        width: '32%',
      },
      {
        type: 'text',
        label: 'Introduction',
        key: 'introduction',
        placeholder: 'Enter your introduction',
        width: '32%',
      },
      {
        type: 'text',
        label: 'Signature',
        key: 'signature',
        placeholder: 'Enter your signature',
        width: '32%',
      },

      // **Social Media Links**
      {
        type: 'text',
        label: 'Facebook URL',
        key: 'facebook',
        placeholder: 'Enter Facebook profile link',
        width: '32%',
      },
      {
        type: 'text',
        label: 'Instagram URL',
        key: 'instagram',
        placeholder: 'Enter Instagram profile link',
        width: '32%',
      },
      {
        type: 'text',
        label: 'LinkedIn URL',
        key: 'linkedin',
        placeholder: 'Enter LinkedIn profile link',
        width: '32%',
      },
      {
        type: 'text',
        label: 'TikTok URL',
        key: 'tiktok',
        placeholder: 'Enter TikTok profile link',
        width: '32%',
      },
      {
        type: 'text',
        label: 'Twitter URL',
        key: 'twitter',
        placeholder: 'Enter Twitter profile link',
        width: '32%',
      },
      {
        type: 'text',
        label: 'YouTube URL',
        key: 'youtube',
        placeholder: 'Enter YouTube profile link',
        width: '32%',
      },

      // **Branding**

      {
        type: 'text',
        label: 'Square Logo URL',
        key: 'logoUrl',
        placeholder: 'Enter logo image URL',
        width: '32%',
      },
      {
        type: 'color',
        label: 'Brand Color',
        key: 'color',
        placeholder: 'Select a color',
        width: '32%',
      },
    ],

    // **Form Buttons**
    submitButtonConfig: {
      text: 'Save',
      foregroundColor: '#ffffff',
      hasBorder: false,
      backgroundColor: '#DD8208',
      width: '32%',
    },
    cancelButtonConfig: {
      text: 'Cancel',
      foregroundColor: '#ffffff',
      hasBorder: false,
      backgroundColor: '#DD8208',
      width: '32%',
      action: () => this.onCancel(),
      align: 'right',
    },
  };

  onSave(event: Event) {
    console.log('event: ', event);
    const keys = Object.keys(event);
    this.contacts = [...this.contacts, event];
    console.log('this.contacts: ', this.contacts);
    this.formComponent.form.reset();
  }

  onCancel() {
    console.log('Form cancelled');
  }
}
