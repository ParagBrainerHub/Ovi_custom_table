import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();

  // Add a method to get the current value directly
  get isDarkThemeValue(): boolean {
    return this.isDarkThemeSubject.value;
  }

  toggleTheme() {
    this.isDarkThemeSubject.next(!this.isDarkThemeSubject.value);
  }

  setDarkTheme(isDark: boolean) {
    this.isDarkThemeSubject.next(isDark);
  }
}
