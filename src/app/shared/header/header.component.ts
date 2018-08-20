import { StateManager } from './../class/state-manager';
import { Constants } from '../class/constants';
import { MainTabs } from '../model/main-tabs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Language } from 'angular-l10n';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Language() lang: string;
  asyncTabs: Observable<MainTabs[]>;
  constructor(
    private afs: AngularFirestore,
    private route: Router,
    public state: StateManager
  ) {
    this.asyncTabs = this.afs.collection<MainTabs>(Constants.MAIN_TABS).valueChanges();
  }

  ngOnInit() {
  }

  gotoRoute(routelink: MainTabs) {
    this.state.activeTab = routelink;
    this.route.navigate([routelink.href]);
  }
}
