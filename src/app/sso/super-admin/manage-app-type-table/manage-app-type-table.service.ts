import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { AppType } from '../manage-app-type-form/manage-app-type.model';

@Injectable({
  providedIn: 'root',
})
export class ManageAppTypeTableService {
  private appTypes: AppType[] = [
    { id: uuidv4(), name: 'Admin Portal', homeUrl: 'https://admin.app' },
    { id: uuidv4(), name: 'User Portal', homeUrl: 'https://user.app' },
  ];

  private appTypesSubject = new BehaviorSubject<AppType[]>(this.appTypes);
  appTypes$ = this.appTypesSubject.asObservable();

  getAppTypes() {
    return this.appTypesSubject.value;
  }

  addOrUpdateAppType(appType: AppType) {
    const existingIndex = this.appTypes.findIndex((t) => t.id === appType.id);
    if (existingIndex !== -1) {
      this.appTypes[existingIndex] = appType; // Update existing
    } else {
      this.appTypes.push({ ...appType, id: uuidv4() }); // Add new
    }
    this.appTypesSubject.next([...this.appTypes]);
  }

  deleteAppType(id: string) {
    this.appTypes = this.appTypes.filter((t) => t.id !== id);
    this.appTypesSubject.next([...this.appTypes]);
  }
}
