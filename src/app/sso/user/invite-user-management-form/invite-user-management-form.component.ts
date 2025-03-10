import { Component, ViewChild } from '@angular/core';
import { FormComponentComponent } from '../../../form-component/form-component.component';
import { Router } from '@angular/router';
import { FormConfig } from '../../../form-component/form-modal';
import { Location } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { InviteUserManagementService } from '../invite-user-management-table/invite-user-management.service';
import { InviteUser } from '../invite-user-management-table/invite-user-management.model';
@Component({
  selector: 'app-invite-user-management-form',
  standalone: true,
  imports: [FormComponentComponent],
  templateUrl: './invite-user-management-form.component.html',
  styleUrl: './invite-user-management-form.component.css',
})
export class InviteUserManagementFormComponent {
  @ViewChild(FormComponentComponent) formComponent!: FormComponentComponent;

  constructor(
    private router: Router,
    private location: Location,
    private inviteService: InviteUserManagementService
  ) {}

  formConfigForInviteUser: FormConfig = {
    formTitle: 'Invite User',
    formTitleStyles: { color: '#DD8208' },
    isImageShow: false,
    formWidth: 40,
    backgroundColor: 'transparent',
    fields: [
      {
        type: 'email',
        label: 'Email',
        key: 'email',
        placeholder: 'Enter email',
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
        type: 'select',
        label: 'Role',
        key: 'role',
        required: true,
        width: '100%',
        options: [
          { key: 'admin', label: 'Admin', value: 'admin' },
          { key: 'user', label: 'User', value: 'user' },
          { key: 'manager', label: 'Manager', value: 'manager' },
        ],
        errorMessages: { required: 'Role is required.' },
      },
      {
        type: 'select',
        label: 'App',
        key: 'app',
        placeholder: 'Search and select an app',
        required: true,
        width: '100%',
        options: [
          { key: 'app1', label: 'App 1', value: 'app1' },
          { key: 'app2', label: 'App 2', value: 'app2' },
          { key: 'app3', label: 'App 3', value: 'app3' },
        ],
        errorMessages: { required: 'App selection is required.' },
      },
      {
        type: 'date',
        label: 'Expiry Date',
        key: 'expiryDate',
        required: true,
        width: '100%',
        errorMessages: { required: 'Expiry date is required.' },
      },
    ],

    // **Form Buttons**
    submitButtonConfig: {
      text: 'Send Invite',
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

  onSendInvite(event: any) {
    let newInvite: InviteUser = { ...event };
    if (!newInvite.id) {
      newInvite.id = uuidv4();
    }
    this.inviteService.addOrUpdateInvite(newInvite);
    console.log('Invite Sent:', newInvite);
    this.router.navigate(['user/invite-user-management-table']);
  }

  onCancel() {
    this.location.back();
  }
}
