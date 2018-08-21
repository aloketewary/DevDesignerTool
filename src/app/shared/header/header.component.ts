import { trigger, transition, style, animate } from '@angular/animations';
import { UiService } from './../services/ui.service';
import { ConfigLoaderService } from './../../config-loader.service';
import { Config } from './../../models/config';
import { StateManager } from './../class/state-manager';
import { MainTabs } from '../model/main-tabs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Language } from 'angular-l10n';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
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
  constructor(
    private route: Router,
    public state: StateManager,
    configLoader: ConfigLoaderService,
    private uiService: UiService
  ) {
    this.config = configLoader.getConfigData();
  }

  ngOnInit() {
    this.uiService.getMainTabs().subscribe((tabs: MainTabs[]) => {
      this.asyncTabs = tabs;
      tabs.forEach(refLink => {
        if (refLink.href === this.currentUrl) {
          this.state.activeTab = refLink;
        }
      });
    });
    this.route.events.subscribe((_: NavigationEnd) => {
      this.currentUrl =  this.currentUrl || _.url;
    });
  }

  gotoRoute(routelink: MainTabs) {
    this.state.activeTab = routelink;
    this.route.navigate([routelink.href]);
  }
}
