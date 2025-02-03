import { Component } from '@angular/core';
import { CustomTableComponent } from '../custom-table/custom-table.component';
import { CustomMaterialTableComponent } from '../custom-material-table/custom-material-table.component';
import { CustomButtonComponent } from '../button-component/custom-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [CustomMaterialTableComponent, CustomButtonComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {
  currentComponent: string = 'CustomTableComponent';

  changeTab(tableName: string) {
    this.currentComponent = tableName;
  }
}
