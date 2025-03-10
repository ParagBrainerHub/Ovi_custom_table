import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ManageApp } from '../manage-app-form/manage-app-form.model';

@Injectable({
  providedIn: 'root',
})
export class ManageAppTableService {
  private appsSubject = new BehaviorSubject<ManageApp[]>([]);
  apps$ = this.appsSubject.asObservable();

  constructor() {}

  addOrUpdateApp(app: ManageApp) {
    const currentApps = this.appsSubject.value;
    const index = currentApps.findIndex(
      (existingApp) => existingApp.id === app.id
    );

    if (!app.id) {
      app.id = uuidv4();
    }

    if (index !== -1) {
      currentApps[index] = app;
    } else {
      currentApps.push(app);
    }

    this.appsSubject.next([...currentApps]);
  }

  getApps() {
    return this.apps$;
  }

  deleteApp(appId: string) {
    const updatedApps = this.appsSubject.value.filter(
      (app) => app.id !== appId
    );
    this.appsSubject.next(updatedApps);
  }

  getAppById(appId: string): ManageApp | undefined {
    return this.appsSubject.value.find((app) => app.id === appId);
  }
}
