import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {
  TableColumn,
  TableConfig,
} from '../../../custom-material-table/material-table-column.model';
import { AdminManageContactsStyleTableService } from './admin-manage-contacts-style-table.service';
import { ContactStyle } from './admin-manage-contacts-style-table.model';
import { CustomMaterialTableComponent } from '../../../custom-material-table/custom-material-table.component';
import { CustomButtonComponent } from '../../../button-component/custom-button.component';
import { ButtonConfig } from '../../../button-component/button.model';

@Component({
  selector: 'app-admin-manage-contacts-style-table',
  standalone: true,
  imports: [CustomMaterialTableComponent, CustomButtonComponent],
  templateUrl: './admin-manage-contacts-style-table.component.html',
  styleUrl: './admin-manage-contacts-style-table.component.css',
})
export class AdminManageContactsStyleTableComponent {
  styles: ContactStyle[] = [];
  tableConfig!: TableConfig;

  constructor(
    private router: Router,
    private stylesService: AdminManageContactsStyleTableService
  ) {
    this.tableConfig = {
      isHeader: true,
      tableTitle: 'Manage Contact Styles',
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
        key: 'primaryColor',
        title: 'Primary Color',
        type: 'text',
        alignment: 'center',
      },
      {
        key: 'secondaryColor',
        title: 'Secondary Color',
        type: 'text',
        alignment: 'center',
      },
      {
        key: 'complementaryColor',
        title: 'Complementary Color',
        type: 'text',
        alignment: 'center',
      },
      {
        key: 'primaryFont',
        title: 'Primary Font',
        type: 'text',
        alignment: 'left',
      },
      {
        key: 'secondaryFont',
        title: 'Secondary Font',
        type: 'text',
        alignment: 'left',
      },
      { key: 'logoUrl', title: 'Logo', type: 'image', alignment: 'center' },
      {
        key: 'primaryBackground',
        title: 'Primary Background',
        type: 'image',
        alignment: 'center',
      },
      {
        key: 'secondaryBackground',
        title: 'Secondary Background',
        type: 'image',
        alignment: 'center',
      },
    ];
  }

  ngOnInit(): void {
    this.stylesService.getStyles().subscribe((styles: any) => {
      console.log('styles: 12345', styles);
      this.styles = styles;
    });
  }

  handleEditActionClicked(editObj: any) {
    const navigationExtras: NavigationExtras = {
      state: { styleData: JSON.stringify(editObj) },
    };
    this.router.navigate(
      ['admin/manage-contacts-styles-form'],
      navigationExtras
    );
  }

  handleDeleteActionClicked(styleId: string) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this style?'
    );
    if (confirmDelete) {
      this.stylesService.deleteStyle(styleId);
      this.stylesService.getStyles().subscribe((styles: any) => {
        this.styles = styles;
      });
    }
  }

  button: ButtonConfig = {
    text: 'Add App Style',
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

  navigateToForm() {
    this.router.navigate(['admin/manage-contact-styles-form']);
  }
}
