import { Component, ViewChild } from '@angular/core';
import { FormComponentComponent } from '../../../form-component/form-component.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormConfig } from '../../../form-component/form-modal';
import { ContactStyle } from '../admin-manage-contacts-style-table/admin-manage-contacts-style-table.model';
import { AdminManageContactsStyleTableService } from '../admin-manage-contacts-style-table/admin-manage-contacts-style-table.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-manage-contacts-styles-form',
  standalone: true,
  imports: [FormComponentComponent],
  templateUrl: './manage-contacts-styles-form.component.html',
  styleUrl: './manage-contacts-styles-form.component.css',
})
export class ManageContactsStylesFormComponent {
  @ViewChild(FormComponentComponent) formComponent!: FormComponentComponent;
  contactStyle: ContactStyle | null = null;
  formConfigForManageStyles: FormConfig = {
    formTitle: 'Manage Contact Styles',
    formTitleStyles: { color: '#DD8208' },
    formSubTitle: 'Update your branding styles and preferences',
    isImageShow: false,
    formWidth: 100,
    backgroundColor: 'transparent',
    fields: [
      // **General Information**
      {
        key: 'appId',
        type: 'text',
        label: 'App ID',
        disabled: true,
        placeholder: '',
        width: '48%',
      },

      // **Colors**
      {
        key: 'primaryColor',
        value: '1234',
        type: 'color',
        label: 'Primary Color',
        placeholder: 'Select primary color',
        width: '48%',
      },
      {
        key: 'secondaryColor',
        type: 'color',
        label: 'Secondary Color',
        placeholder: 'Select secondary color',
        width: '48%',
      },
      {
        key: 'complementaryColor',
        type: 'color',
        label: 'Complementary Color',
        placeholder: 'Select complementary color',
        width: '48%',
      },

      // **Fonts**
      {
        key: 'primaryFont',
        type: 'select',
        label: 'Primary Font Family',
        options: [
          { key: 'roboto', label: 'Roboto', value: 'Roboto' },
          { key: 'arial', label: 'Arial', value: 'Arial' },
        ],
        width: '48%',
      },
      {
        key: 'secondaryFont',
        type: 'select',
        label: 'Secondary Font Family',
        options: [
          { key: 'roboto', label: 'Roboto', value: 'Roboto' },
          { key: 'arial', label: 'Arial', value: 'Arial' },
        ],
        width: '48%',
      },

      // **Images**
      {
        key: 'logoImage',
        type: 'file',
        fileConfig: {
          allowedTypes: ['image/png', 'image/jpeg', 'image/jpg'], // Allow only PNG and JPEG files
        },
        label: 'Logo Image',
        placeholder: 'Choose a file',
        width: '32%',
      },
      {
        key: 'primaryBackground',
        type: 'file',
        fileConfig: {
          allowedTypes: ['image/png', 'image/jpeg', 'image/jpg'], // Allow only PNG and JPEG files
        },
        label: 'Primary Background',
        placeholder: 'Choose a file',
        width: '32%',
      },
      {
        key: 'secondaryBackground',
        type: 'file',
        fileConfig: {
          allowedTypes: ['image/png', 'image/jpeg', 'image/jpg'], // Allow only PNG and JPEG files
        },
        label: 'Secondary Background',
        placeholder: 'Choose a file',
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

  constructor(
    private router: Router,
    private location: Location,
    private stylesService: AdminManageContactsStyleTableService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['styleData']) {
      try {
        this.contactStyle = JSON.parse(navigation.extras.state['styleData']);
      } catch (error) {
        console.error('Error parsing contactData:', error);
      }
    }
  }

  ngAfterViewInit() {
    if (this.contactStyle && this.formComponent) {
      this.formComponent.form.patchValue(this.contactStyle);
    }
  }

  onSave(event: any) {
    console.log('Saved styles Data:', event);
    let newContact = { ...event };
    if (!event.id || event.id === '' || event.id === null) {
      console.log('Generating new ID');
      newContact.id = uuidv4();
    }
    this.stylesService.addOrUpdateStyle(newContact);
    this.router.navigate(['admin/manage-contact-table-style']);
  }

  onCancel() {
    this.location.back();
  }
}
