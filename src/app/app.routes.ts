import { Routes } from '@angular/router';
import { CustomMaterialTableComponent } from './custom-material-table/custom-material-table.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';

export const routes: Routes = [
  // {
  //   path: 'customTable',
  //   component: CustomTableComponent,
  // },
  {
    path: 'materialTable',
    component: CustomMaterialTableComponent,
  },
  {
    path: '',
    redirectTo: 'customTable',
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
    path: 'logout',
    component: LogoutPageComponent,
  },
  {
    path: '**',
    redirectTo: 'customTable', // Redirect wildcard paths to a valid component
  },
];
