import { Component, ViewChild } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormConfig } from '../../../form-component/form-modal';
import { ManageAppTypeTableService } from '../manage-app-type-table/manage-app-type-table.service';
import { FormComponentComponent } from '../../../form-component/form-component.component';
import { AppType } from './manage-app-type.model';

@Component({
  selector: 'app-manage-app-type-form',
  standalone: true,
  imports: [FormComponentComponent],
  templateUrl: './manage-app-type-form.component.html',
  styleUrl: './manage-app-type-form.component.css',
})
export class ManageAppTypeFormComponent {
  @ViewChild(FormComponentComponent) formComponent!: FormComponentComponent;
  appTypeData: AppType | null = null;

  constructor(
    private router: Router,
    private location: Location,
    private manageAppTypeService: ManageAppTypeTableService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['appTypeData']) {
      try {
        this.appTypeData = JSON.parse(navigation.extras.state['appTypeData']);
        console.log('this.appTypeData: ', this.appTypeData);
      } catch (error) {
        console.error('Error parsing appTypeData:', error);
      }
    }
  }

  ngAfterViewInit() {
    if (this.appTypeData && this.formComponent) {
      this.formComponent.form.patchValue(this.appTypeData);
    }
  }

  formConfigForManageAppType: FormConfig = {
    formTitle: this.appTypeData ? 'Edit App Type' : 'Manage App Type',
    formTitleStyles: { color: '#DD8208' },
    isImageShow: false,
    formWidth: 50,
    backgroundColor: 'transparent',
    fields: [
      {
        type: 'text',
        label: 'App Type',
        key: 'name',
        placeholder: 'Enter app type',
        required: true,
        width: '100%',
        value: this.appTypeData?.name || '',
        errorMessages: { required: 'App Type is required.' },
      },
      {
        type: 'text',
        label: 'Home URL',
        key: 'homeUrl',
        placeholder: 'Enter home URL',
        required: true,
        width: '100%',
        value: this.appTypeData?.homeUrl || '',
        errorMessages: { required: 'Home URL is required.' },
      },
    ],

    submitButtonConfig: {
      text: this.appTypeData ? 'Update' : 'Save',
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

  onSave(event: any) {
    let newAppType = { ...event };

    if (this.appTypeData && this.appTypeData.id) {
      newAppType.id = this.appTypeData.id;
    } else {
      newAppType.id = uuidv4();
    }

    this.manageAppTypeService.addOrUpdateAppType(newAppType);
    console.log(
      this.appTypeData ? 'App Type Updated:' : 'App Type Saved:',
      newAppType
    );
    this.router.navigate(['super-admin/manage-app-type-table']);
  }

  onCancel() {
    this.location.back();
  }
}
