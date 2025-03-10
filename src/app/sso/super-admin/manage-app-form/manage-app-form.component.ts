import { Component, ViewChild } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ManageAppTableService } from '../manage-app-table/manage-app-table.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormConfig } from '../../../form-component/form-modal';
import { FormComponentComponent } from '../../../form-component/form-component.component';
@Component({
  selector: 'app-manage-app-form',
  standalone: true,
  imports: [FormComponentComponent],
  templateUrl: './manage-app-form.component.html',
  styleUrl: './manage-app-form.component.css',
})
export class ManageAppFormComponent {
  @ViewChild(FormComponentComponent) formComponent!: FormComponentComponent;
  appData;
  constructor(
    private router: Router,
    private location: Location,
    private manageAppService: ManageAppTableService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['appData']) {
      try {
        this.appData = JSON.parse(navigation.extras.state['appData']);
        console.log('this.appData: ', this.appData);
      } catch (error) {
        console.error('Error parsing appData:', error);
      }
    }
  }

  formConfigForManageApp: FormConfig = {
    formTitle: 'Manage App',
    formTitleStyles: { color: '#DD8208' },
    isImageShow: false,
    formWidth: 50,
    backgroundColor: 'transparent',
    fields: [
      {
        type: 'text',
        label: 'App Name',
        key: 'appName',
        placeholder: 'Enter app name',
        required: true,
        width: '100%',
        errorMessages: { required: 'App Name is required.' },
      },
      {
        type: 'number',
        label: 'Max Superusers',
        key: 'maxSuperusers',
        placeholder: 'Enter max superusers',
        required: true,
        width: '100%',
        errorMessages: { required: 'Max Superusers is required.' },
      },
      {
        type: 'number',
        label: 'Expected Users',
        key: 'expectedUsers',
        placeholder: 'Enter expected users',
        required: true,
        width: '100%',
        errorMessages: { required: 'Expected Users is required.' },
      },
      {
        type: 'number',
        label: 'Expected Apps',
        key: 'expectedApps',
        placeholder: 'Enter expected apps',
        required: true,
        width: '100%',
        errorMessages: { required: 'Expected Apps is required.' },
      },
      {
        type: 'radio',
        label: 'Multi-Factor Auth',
        key: 'multiFactorAuth',
        required: true,
        width: '100%',
        options: [
          { key: 'yes', label: 'Yes', value: true },
          { key: 'no', label: 'No', value: false },
        ],
        errorMessages: { required: 'This field is required.' },
      },
      {
        type: 'radio',
        label: 'Social Login',
        key: 'socialLogin',
        required: true,
        width: '100%',
        options: [
          { key: 'yes', label: 'Yes', value: true },
          { key: 'no', label: 'No', value: false },
        ],
        errorMessages: { required: 'This field is required.' },
      },
    ],

    submitButtonConfig: {
      text: 'Save',
      foregroundColor: '#ffffff',
      hasBorder: false,
      backgroundColor: '#DD8208',
      width: '48%',
    },
    cancelButtonConfig: {
      text: 'Cancel',
      foregroundColor: '#ffffff',
      hasBorder: false,
      backgroundColor: '#DD8208',
      width: '48%',
      action: () => this.onCancel(),
      align: 'right',
    },
  };

  ngAfterViewInit() {
    if (this.appData && this.formComponent) {
      this.formComponent.form.patchValue(this.appData);
    }
  }

  onSave(event: any) {
    let newApp = { ...event };
    if (!newApp.id) {
      newApp.id = uuidv4();
    }
    this.manageAppService.addOrUpdateApp(newApp);
    console.log('App Saved:', newApp);
    this.router.navigate(['super-admin/manage-app-table']);
  }

  onCancel() {
    this.location.back();
  }
}
