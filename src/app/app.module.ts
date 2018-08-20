import { AuthInterceptorService } from './shared/interceptor/auth-interceptor.service';
import { ConfigLoaderService } from './config-loader.service';
import { environment } from '../environments/environment';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconRegistry,
  MatTabsModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
} from '@angular/material';
import {
  L10nConfig,
  L10nLoader,
  ProviderType,
  StorageStrategy,
  TranslationModule,
} from 'angular-l10n';
import { OverlayContainer } from '@angular/cdk/overlay';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IconsComponent } from './components/icons/icons.component';
import { ScrollableDirective } from './directives/scrollable.directive';
import { FontsComponent } from './components/fonts/fonts.component';
import { ColorsComponent } from './components/colors/colors.component';
import { PalletesComponent } from './components/palletes/palletes.component';
import { ScrollEventModule } from 'ngx-scroll-event';

const l10nConfig: L10nConfig = {
  locale: {
    languages: [
      { code: 'en', dir: 'ltr' },
      { code: 'nl', dir: 'ltr' }
    ],
    language: 'en',
    storage: StorageStrategy.Cookie
  },
  translation: {
    providers: [
      { type: ProviderType.WebAPI, prefix: 'https://raw.githubusercontent.com/aloketewary/Material-Color-Tool/master/docs/i18n/locale-' },
      { type: ProviderType.Fallback, prefix: './assets/i18n/locale-' }
    ],
    caching: true,
    missingValue: 'No key',
    composedKeySeparator: '.'
  }
};

export function configProviderFactory(provider: ConfigLoaderService) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconsComponent,
    ScrollableDirective,
    FontsComponent,
    ColorsComponent,
    PalletesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    TranslationModule.forRoot(l10nConfig),
    MatTabsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule.enablePersistence(),
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    ScrollEventModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: configProviderFactory, deps: [ConfigLoaderService], multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private overlayContainer: OverlayContainer,
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
    public l10nLoader: L10nLoader) {
    // this.overlayContainer.getContainerElement().classList.add('scorius-alt-theme');
    // matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/mdi.svg'));
    this.l10nLoader.load();
  }
}
