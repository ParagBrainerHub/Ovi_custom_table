import { Routes } from '@angular/router';
import { CustomMaterialTableComponent } from './custom-material-table/custom-material-table.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { MicroservicesComponent } from './microservices/microservices.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AdminManageContactsTableComponent } from './sso/admin/admin-manage-contacts-table/admin-manage-contacts-table.component';
import { LoginFormComponent } from './sso/user/login-form/login-form.component';
import { ForgotPasswordComponent } from './sso/user/forgot-password/forgot-password.component';
import { RegisterFormComponent } from './sso/user/register-form/register-form.component';
import { ManageContactsFormComponent } from './sso/admin/manage-contacts-form/manage-contacts-form.component';
import { ManageContactsStylesFormComponent } from './sso/admin/manage-contacts-styles-form/manage-contacts-styles-form.component';
import { AdminManageContactsStyleTableComponent } from './sso/admin/admin-manage-contacts-style-table/admin-manage-contacts-style-table.component';
import { InviteUserManagementFormComponent } from './sso/user/invite-user-management-form/invite-user-management-form.component';
import { InviteUserManagementTableComponent } from './sso/user/invite-user-management-table/invite-user-management-table.component';
import { ManageAppFormComponent } from './sso/super-admin/manage-app-form/manage-app-form.component';
import { ManageAppTableComponent } from './sso/super-admin/manage-app-table/manage-app-table.component';
import { ManageAppTypeFormComponent } from './sso/super-admin/manage-app-type-form/manage-app-type-form.component';
import { ManageAppTypeTableComponent } from './sso/super-admin/manage-app-type-table/manage-app-type-table.component';
import { MfaForUsersFormComponent } from './sso/admin/mfa-for-users-form/mfa-for-users-form.component';
import { MfaDefaultConfFormComponent } from './sso/admin/mfa-default-conf-form/mfa-default-conf-form.component';

export const routes: Routes = [
  // {
  //   path: 'customTable',
  //   component: CustomTableComponent,
  // },
  {
    path: 'microservices-page',
    component: MicroservicesComponent,
  },
  {
    path: 'materialTable',
    component: CustomMaterialTableComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about_us',
    component: CustomMaterialTableComponent,
  },
  {
    path: 'blog',
    component: CustomMaterialTableComponent,
  },
  // {
  //   path: 'contact',
  //   component: CustomMaterialTableComponent,
  // },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: 'admin/manage-contact-form',
    component: ManageContactsFormComponent,
  },
  {
    path: 'admin/manage-contact-styles-form',
    component: ManageContactsStylesFormComponent,
  },
  {
    path: 'admin/manage-contact-table',
    component: AdminManageContactsTableComponent,
  },
  {
    path: 'admin/manage-contact-table-style',
    component: AdminManageContactsStyleTableComponent,
  },
  {
    path: 'user/invite-user-management-form',
    component: InviteUserManagementFormComponent,
  },
  {
    path: 'user/invite-user-management-table',
    component: InviteUserManagementTableComponent,
  },
  {
    path: 'super-admin/manage-app-form',
    component: ManageAppFormComponent,
  },
  {
    path: 'super-admin/manage-app-table',
    component: ManageAppTableComponent,
  },
  {
    path: 'super-admin/manage-app-type-form',
    component: ManageAppTypeFormComponent,
  },
  {
    path: 'super-admin/manage-app-type-table',
    component: ManageAppTypeTableComponent,
  },
  {
    path: 'user/mfa',
    component: MfaForUsersFormComponent,
  },
  {
    path: 'default/mfa',
    component: MfaDefaultConfFormComponent,
  },
  {
    path: '**',
    redirectTo: 'home', // Redirect wildcard paths to a valid component
  },
];
