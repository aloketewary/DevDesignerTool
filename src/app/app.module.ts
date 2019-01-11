import {
  L10nConfig, L10nLoader, ProviderType, StorageStrategy, TranslationModule, TranslationService
} from 'angular-l10n';

import { OverlayContainer } from '@angular/cdk/overlay';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import {
  BrowserModule, DomSanitizer, HAMMER_GESTURE_CONFIG, HammerGestureConfig
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigLoaderService } from './config-loader.service';
import { Constants } from './shared/class/constants';
import { ColorPopupsComponent } from './shared/components/color-popups/color-popups.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SharedModule } from './shared/modules/shared/shared.module';
import { CachingInterceptor } from './shared/services/cache-interceptor';

const l10nConfig: L10nConfig = {
  locale: {
    languages: [
      { code: Constants.LOCALE_EN.NAME, dir: 'ltr' },
      { code: Constants.LOCALE_HN.NAME, dir: 'ltr' }
    ],
    language: Constants.LOCALE_EN.NAME,
    storage: StorageStrategy.Local
  },
  translation: {
    providers: [
      { type: ProviderType.WebAPI, path: Constants.LOCALE_EN.URL },
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
    PageNotFoundComponent,
    ColorPopupsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    TranslationModule.forRoot(l10nConfig),
    AppRoutingModule,
  ],
  entryComponents: [ColorPopupsComponent],
  providers: [
    { provide: APP_INITIALIZER, useFactory: configProviderFactory, deps: [ConfigLoaderService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private overlayContainer: OverlayContainer,
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
    public l10nLoader: L10nLoader,
    private translation: TranslationService) {
    // this.overlayContainer.getContainerElement().classList.add('devdesign-dark-theme');
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/mdi.svg'));
    this.translation.translationError.subscribe((error: any) => console.log(error));
    this.l10nLoader.load();
  }
}
