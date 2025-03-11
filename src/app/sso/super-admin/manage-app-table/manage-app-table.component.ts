import { Component } from '@angular/core';
import { CustomMaterialTableComponent } from '../../../custom-material-table/custom-material-table.component';
import { CustomButtonComponent } from '../../../button-component/custom-button.component';
import { ButtonConfig } from '../../../button-component/button.model';
import { ManageApp } from '../manage-app-form/manage-app-form.model';
import { NavigationExtras, Router } from '@angular/router';
import {
  TableColumn,
  TableConfig,
} from '../../../custom-material-table/material-table-column.model';
import { ManageAppTableService } from './manage-app-table.service';

@Component({
  selector: 'app-manage-app-table',
  standalone: true,
  imports: [CustomMaterialTableComponent, CustomButtonComponent],
  templateUrl: './manage-app-table.component.html',
  styleUrl: './manage-app-table.component.css',
})
export class ManageAppTableComponent {
  apps: ManageApp[] = [];
  tableConfig!: TableConfig;

  constructor(
    private router: Router,
    private appService: ManageAppTableService
  ) {
    this.tableConfig = {
      isHeader: true,
      tableTitle: 'Manage Apps',
      columns: this.getTableColumns(),
      currentPage: 1,
      itemsPerPage: 10,
      maxItemsOptions: [5, 10, 25, 50],
      showFilter: false,
      actions: [
        {
          icon: '✏️',
          showIcon: true,
          iconPosition: 'left',
          shape: 'square',
          hasBorder: false,
          corners: 'rounded',
          foregroundColor: '#ffffff',
          backgroundColor: '#800080',
          shadow: true,
          transparent: false,
        },
        {
          icon: '❌',
          showIcon: true,
          iconPosition: 'right',
          hasBorder: false,
          shape: 'square',
          corners: 'squared',
          foregroundColor: '#ff0000',
          backgroundColor: '#000000',
          shadow: false,
          transparent: true,
        },
      ],
    };
  }

  getTableColumns(): TableColumn[] {
    return [
      { key: 'appName', title: 'App Name', type: 'text', alignment: 'left' },
      {
        key: 'maxSuperusers',
        title: 'Max Superusers',
        type: 'text',
        alignment: 'left',
      },
      {
        key: 'expectedUsers',
        title: 'Expected Users',
        type: 'text',
        alignment: 'left',
      },
      {
        key: 'expectedApps',
        title: 'Expected Apps',
        type: 'text',
        alignment: 'left',
      },
      {
        key: 'multiFactorAuth',
        title: 'Multi-Factor Auth',
        type: 'text',
        alignment: 'center',
      },
      {
        key: 'socialLogin',
        title: 'Social Login',
        type: 'text',
        alignment: 'center',
      },
    ];
  }

  ngOnInit(): void {
    this.appService.getApps().subscribe((apps: ManageApp[]) => {
      this.apps = apps;
    });
  }

  handleEditActionClicked(editObj: ManageApp) {
    const navigationExtras: NavigationExtras = {
      state: { appData: JSON.stringify(editObj) },
    };
    this.router.navigate(['super-admin/manage-app-form'], navigationExtras);
  }

  handleDeleteActionClicked(appId: string) {
    const confirmDelete = confirm('Are you sure you want to delete this app?');
    if (confirmDelete) {
      this.appService.deleteApp(appId);
      this.appService.getApps().subscribe((apps: ManageApp[]) => {
        this.apps = apps;
      });
    }
  }

  navigateToForm() {
    this.router.navigate(['super-admin/manage-app-form']);
  }

  button: ButtonConfig = {
    text: 'Add App',
    align: 'right',
    group: 'right',
    icon: 'add',
    showIcon: true,
    iconPosition: 'left',
    shape: 'square',
    corners: 'rounded',
    foregroundColor: '#ffffff',
    backgroundColor: '#dd8208',
    hasBorder: false,
    shadow: true,
    transparent: false,
  };
}
