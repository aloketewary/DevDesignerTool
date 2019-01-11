import { LanguageDataModel } from './../../model/language.model';
import { Language, LocaleService } from 'angular-l10n';
import { ConfigLoaderService } from 'src/app/config-loader.service';

import { animate, style, transition, trigger } from '@angular/animations';
import { ScrollDispatcher } from '@angular/cdk/overlay';
import { Component, NgZone, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Config } from '../../../models/config';
import { Constants } from '../../class/constants';
import { StateManager } from '../../class/state-manager';
import { MainTabs } from '../../model/main-tabs';
import { UiService } from '../../services/ui.service';

const { version: appVersion } = require('../../../../../package.json');
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
        ])
      ]
    )
  ]
})
export class HeaderComponent implements OnInit {

  @Language() lang: string;
  asyncTabs: MainTabs[];
  private config: Config;
  currentUrl: string;
  private readonly SHRINK_TOP_SCROLL_POSITION = 15;
  shrinkToolbar = false;
  _appVersion = appVersion;
  languageList: Array<LanguageDataModel>;
  constructor(
    private route: Router,
    public state: StateManager,
    configLoader: ConfigLoaderService,
    private uiService: UiService,
    private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone,
    public locale: LocaleService
  ) {
    this.config = configLoader.getConfigData();
    this.languageList = new Array<LanguageDataModel>(0);
  }

  ngOnInit() {
    this.uiService.getMainTabs().subscribe((tabs: MainTabs[]) => {
      this.asyncTabs = tabs;
      tabs.forEach(refLink => {
        if (refLink.href === JSON.parse(localStorage.getItem(Constants.ACTIVE_TAB_KEY)).href) {
          this.state.activeTab = refLink;
        }
      });
    });
    this.uiService.getLanguageData().subscribe(langData => this.languageList = langData);
    this.route.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = this.currentUrl || _.url;
    });
    // this.scrollDispatcher.scrolled()
    //   .pipe(map((event: CdkScrollable) => this.getScrollPosition(event)))
    //   .subscribe(scrollTop => this.ngZone.run(() => this.shrinkToolbar = scrollTop > this.SHRINK_TOP_SCROLL_POSITION ? true : false));
  }

  gotoRoute(routelink: MainTabs) {
    this.state.activeTab = routelink;
    localStorage.setItem(Constants.ACTIVE_TAB_KEY, JSON.stringify(routelink));
    this.route.navigate([routelink.href]);
  }

  getScrollPosition(event) {
    if (event) {
      return event.getElementRef().nativeElement.scrollTop;
    } else {
      return window.scrollY;
    }
  }

  changeTheme() {
    const currentTheme = localStorage.getItem('devTheme');
    if (currentTheme !== 'devdesign-dark-theme') {
      localStorage.setItem('devTheme', 'devdesign-dark-theme');
    } else {
      localStorage.removeItem('devTheme');
    }
  }

  selectLanguage(language: string): void {
    this.locale.setCurrentLanguage(language);
  }
}
