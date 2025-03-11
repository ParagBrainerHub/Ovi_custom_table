import { Component } from '@angular/core';
import { CustomMaterialTableComponent } from '../../../custom-material-table/custom-material-table.component';
import { CustomButtonComponent } from '../../../button-component/custom-button.component';
import { InviteUser } from './invite-user-management.model';
import {
  TableColumn,
  TableConfig,
} from '../../../custom-material-table/material-table-column.model';
import { Router } from '@angular/router';
import { InviteUserManagementService } from './invite-user-management.service';
import { ButtonConfig } from '../../../button-component/button.model';

@Component({
  selector: 'app-invite-user-management-table',
  standalone: true,
  imports: [CustomMaterialTableComponent, CustomButtonComponent],
  templateUrl: './invite-user-management-table.component.html',
  styleUrl: './invite-user-management-table.component.css',
})
export class InviteUserManagementTableComponent {
  invites: InviteUser[] = [];
  tableConfig!: TableConfig;

  constructor(
    private router: Router,
    private inviteService: InviteUserManagementService
  ) {
    this.tableConfig = {
      isHeader: true,
      tableTitle: 'Invite User Management',
      columns: this.getTableColumns(),
      currentPage: 1,
      itemsPerPage: 10,
      maxItemsOptions: [5, 10, 25, 50],
      showFilter: false,
      actions: [
        {
          icon: '🔄',
          text: 'Resend',
          showIcon: true,
          iconPosition: 'left',
          shape: 'square',
          hasBorder: false,
          corners: 'rounded',
          foregroundColor: '#ffffff',
          backgroundColor: 'purple',
          shadow: true,
          transparent: false,
        },
        // {
        //   icon: '❌',
        //   showIcon: true,
        //   iconPosition: 'right',
        //   hasBorder: false,
        //   shape: 'square',
        //   corners: 'squared',
        //   foregroundColor: '#ff0000',
        //   backgroundColor: '#000000',
        //   shadow: false,
        //   transparent: true,
        // },
      ],
    };
  }

  getTableColumns(): TableColumn[] {
    return [
      { key: 'email', title: 'Email', type: 'text', alignment: 'left' },
      { key: 'role', title: 'Role', type: 'text', alignment: 'left' },
      { key: 'status', title: 'Status', type: 'text', alignment: 'left' },
      {
        key: 'firstName',
        title: 'First Name',
        type: 'text',
        alignment: 'left',
      },
      { key: 'lastName', title: 'Last Name', type: 'text', alignment: 'left' },
      {
        key: 'linkedApps',
        title: 'Linked Apps',
        type: 'text',
        alignment: 'left',
      },
      {
        key: 'invitedBy',
        title: 'Invited By',
        type: 'text',
        alignment: 'left',
      },
    ];
  }

  ngOnInit(): void {
    this.inviteService.getInvites().subscribe((invites) => {
      this.invites = invites;
    });
  }

  handleResendInvite(invite: InviteUser) {
    console.log('Resending invite for:', invite.email);
  }

  handleDeleteInvite(inviteId: string) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this invite?'
    );
    if (confirmDelete) {
      this.inviteService.deleteInvite(inviteId);
      this.inviteService.getInvites().subscribe((invites) => {
        this.invites = invites;
      });
    }
  }

  navigateToForm() {
    this.router.navigate(['user/invite-user-management-form']);
  }

  button: ButtonConfig = {
    text: 'Invite User',
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
