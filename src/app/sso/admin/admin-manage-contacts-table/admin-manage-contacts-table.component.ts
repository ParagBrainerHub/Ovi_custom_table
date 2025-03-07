import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomButtonComponent } from '../../../button-component/custom-button.component';
import { ButtonConfig } from '../../../button-component/button.model';
import { CustomMaterialTableComponent } from '../../../custom-material-table/custom-material-table.component';
import { Contact } from './admin-manage-contacts-table.model';
import {
  TableColumn,
  TableConfig,
} from '../../../custom-material-table/material-table-column.model';

@Component({
  selector: 'app-admin-manage-contacts-table',
  standalone: true,
  imports: [CustomButtonComponent, CustomMaterialTableComponent],
  templateUrl: './admin-manage-contacts-table.component.html',
  styleUrl: './admin-manage-contacts-table.component.css',
})
export class AdminManageContactsTableComponent {
  contacts: Contact[] = [];
  tableConfig!: TableConfig;
  constructor(private activatedRouter: ActivatedRoute, private router: Router) {
    this.activatedRouter.queryParams.subscribe((data) => console.log(data));
    // if (receivedData) {
    //   this.contacts.push(receivedData);
    // }
    // this.tableConfig = {
    //   isHeader: true,
    //   tableTitle: 'Manage Contacts',
    //   columns: this.getTableColumns(),
    //   currentPage: 1,
    //   itemsPerPage: 10,
    //   maxItemsOptions: [5, 10, 25, 50],
    //   showFilter: false,
    //   actions: [
    //     {
    //       icon: '✏️',
    //       showIcon: true,
    //       iconPosition: 'left',
    //       // onClick: this.editUser.bind(this),
    //       shape: 'square',
    //       hasBorder: false,
    //       corners: 'rounded',
    //       foregroundColor: '#ffffff',
    //       backgroundColor: '#800080',
    //       shadow: true,
    //       transparent: false,
    //     },
    //     {
    //       icon: '❌',
    //       showIcon: true,
    //       iconPosition: 'right',
    //       // onClick: this.deleteUser.bind(this),
    //       hasBorder: false,
    //       shape: 'square',
    //       corners: 'squared',
    //       foregroundColor: '#ff0000',
    //       backgroundColor: '#000000',
    //       shadow: false,
    //       transparent: true,
    //     },
    //   ],
    // };

    console.log('Stored Contacts:', this.contacts);
  }

  navigateToForm() {
    this.router.navigate(['admin/manage-contact-form']);
  }

  button: ButtonConfig = {
    text: 'Add Contact',
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

  getTableColumns(): TableColumn[] {
    return [
      { key: 'name', title: 'Name', type: 'text', alignment: 'left' },
      { key: 'email', title: 'Email', type: 'text', alignment: 'left' },
      { key: 'smtpHost', title: 'SMTP Host', type: 'text', alignment: 'left' },
      { key: 'smtpPort', title: 'SMTP Port', type: 'text', alignment: 'left' },
      {
        key: 'sshEnabled',
        title: 'SSH Enabled',
        type: 'text',
        alignment: 'center',
      },
      { key: 'company', title: 'Company', type: 'text', alignment: 'left' },
      { key: 'facebook', title: 'Facebook', type: 'text', alignment: 'left' },
      { key: 'instagram', title: 'Instagram', type: 'text', alignment: 'left' },
      { key: 'linkedin', title: 'LinkedIn', type: 'text', alignment: 'left' },
      { key: 'tiktok', title: 'TikTok', type: 'text', alignment: 'left' },
      { key: 'youtube', title: 'YouTube', type: 'text', alignment: 'left' },
      { key: 'color', title: 'Color', type: 'text', alignment: 'left' },
      {
        key: 'introduction',
        title: 'Introduction',
        type: 'text',
        alignment: 'left',
      },
      { key: 'signature', title: 'Signature', type: 'text', alignment: 'left' },
      { key: 'logoUrl', title: 'Logo', type: 'image', alignment: 'center' },
    ];
  }
}
