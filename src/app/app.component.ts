import { Language } from 'angular-l10n';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Language() lang: string;
  title = 'app';

  constructor() {

  }

  themeUsed(themeName: string) {
    const themeUsed = localStorage.getItem('devTheme');
    if (themeUsed === themeName) {
      return true;
    }
    return false;
  }
}
