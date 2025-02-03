import { Routes } from '@angular/router';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { CustomMaterialTableComponent } from './custom-material-table/custom-material-table.component';

export const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'customTable',
    component: CustomTableComponent,
  },
  {
    path: 'materialTable',
    component: CustomMaterialTableComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
