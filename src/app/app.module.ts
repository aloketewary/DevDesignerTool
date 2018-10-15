import { Constants } from './shared/class/constants';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from './shared/modules/shared/shared.module';
import { ConfigLoaderService } from './config-loader.service';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconRegistry,
} from '@angular/material';
import {
  L10nConfig,
  L10nLoader,
  ProviderType,
  StorageStrategy,
  TranslationModule,
  TranslationService,
} from 'angular-l10n';
import { OverlayContainer } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { PalletesComponent } from './components/palletes/palletes.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
const l10nConfig: L10nConfig = {
  locale: {
    languages: [
      { code: 'en.json', dir: 'ltr' },
      { code: 'nl', dir: 'ltr' }
    ],
    language: 'en.json',
    storage: StorageStrategy.Cookie
  },
  translation: {
    providers: [
      { type: ProviderType.WebAPI, path: Constants.LOCALE_EN },
      // { type: ProviderType.Fallback, prefix: './assets/i18n/locale-' }
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
    PalletesComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    TranslationModule.forRoot(l10nConfig),
    AppRoutingModule,
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
    public l10nLoader: L10nLoader,
    private translation: TranslationService) {
    this.overlayContainer.getContainerElement().classList.add('devdesign-dark-theme');
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/mdi.svg'));
    this.translation.translationError.subscribe((error: any) => console.log(error));
    this.l10nLoader.load();
  }
}
