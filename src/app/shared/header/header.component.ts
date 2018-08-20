import { UiService } from './../services/ui.service';
import { ConfigLoaderService } from './../../config-loader.service';
import { Config } from './../../models/config';
import { StateManager } from './../class/state-manager';
import { MainTabs } from '../model/main-tabs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Language } from 'angular-l10n';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Language() lang: string;
  asyncTabs: MainTabs[];
  private config: Config;
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
    });
  }

  gotoRoute(routelink: MainTabs) {
    this.state.activeTab = routelink;
    this.route.navigate([routelink.href]);
  }
}
