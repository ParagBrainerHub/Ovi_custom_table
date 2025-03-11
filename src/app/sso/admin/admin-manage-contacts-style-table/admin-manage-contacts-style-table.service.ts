import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContactStyle } from './admin-manage-contacts-style-table.model';

@Injectable({
  providedIn: 'root',
})
export class AdminManageContactsStyleTableService {
  private stylesSubject = new BehaviorSubject<ContactStyle[]>([]);
  styles$ = this.stylesSubject.asObservable();

  addOrUpdateStyle(newStyle: ContactStyle) {
    const currentStyles = this.stylesSubject.value;
    const index = currentStyles.findIndex((style) => style.id === newStyle.id);

    if (index !== -1) {
      currentStyles[index] = newStyle;
    } else {
      currentStyles.push(newStyle);
    }
    this.stylesSubject.next([...currentStyles]);
  }

  getStyles() {
    return this.styles$;
  }

  deleteStyle(styleId: string) {
    const updatedStyles = this.stylesSubject.value.filter(
      (style) => style.id !== styleId
    );
    this.stylesSubject.next(updatedStyles);
  }
}
