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
}
