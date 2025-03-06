import { Routes } from '@angular/router';
import { CustomMaterialTableComponent } from './custom-material-table/custom-material-table.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { MicroservicesComponent } from './microservices/microservices.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { ForgotPasswordComponent } from './forms/forgot-password/forgot-password.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { ManageContactsFormComponent } from './forms/admin/manage-contacts-form/manage-contacts-form.component';

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
  {
    path: 'contact',
    component: CustomMaterialTableComponent,
  },
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
    path: 'admin/manage-contacts',
    component: ManageContactsFormComponent,
  },
  {
    path: '**',
    redirectTo: 'home', // Redirect wildcard paths to a valid component
  },
];
