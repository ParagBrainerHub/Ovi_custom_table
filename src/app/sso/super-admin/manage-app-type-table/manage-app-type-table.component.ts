import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ManageAppTypeTableService } from './manage-app-type-table.service';
import { AppType } from '../manage-app-type-form/manage-app-type.model';
import {
  TableConfig,
  TableColumn,
} from '../../../custom-material-table/material-table-column.model';
import { ButtonConfig } from '../../../button-component/button.model';
import { CustomButtonComponent } from '../../../button-component/custom-button.component';
import { CustomMaterialTableComponent } from '../../../custom-material-table/custom-material-table.component';

@Component({
  selector: 'app-manage-app-type-table',
  standalone: true,
  templateUrl: './manage-app-type-table.component.html',
  styleUrl: './manage-app-type-table.component.css',
  imports: [CustomButtonComponent, CustomMaterialTableComponent],
})
export class ManageAppTypeTableComponent implements OnInit {
  appTypes: AppType[] = [];
  tableConfig!: TableConfig;

  constructor(
    private router: Router,
    private appTypeService: ManageAppTypeTableService
  ) {
    this.tableConfig = {
      isHeader: true,
      tableTitle: 'Manage App Types',
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
      { key: 'name', title: 'App Type', type: 'text', alignment: 'left' },
      { key: 'homeUrl', title: 'Home URL', type: 'text', alignment: 'left' },
    ];
  }

  ngOnInit(): void {
    this.appTypeService.appTypes$.subscribe((appTypes: AppType[]) => {
      this.appTypes = appTypes;
    });
  }

  handleEditActionClicked(editObj: AppType) {
    const navigationExtras: NavigationExtras = {
      state: { appTypeData: JSON.stringify(editObj) },
    };
    this.router.navigate(
      ['super-admin/manage-app-type-form'],
      navigationExtras
    );
  }

  handleDeleteActionClicked(appTypeId: string) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this app type?'
    );
    if (confirmDelete) {
      this.appTypeService.deleteAppType(appTypeId);
      this.appTypeService.appTypes$.subscribe((appTypes: AppType[]) => {
        this.appTypes = appTypes;
      });
    }
  }

  navigateToForm() {
    this.router.navigate(['super-admin/manage-app-type-form']);
  }

  button: ButtonConfig = {
    text: 'Add App Type',
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
