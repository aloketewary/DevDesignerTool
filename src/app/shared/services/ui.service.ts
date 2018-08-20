import { ConfigLoaderService } from './../../config-loader.service';
import { Config } from './../../models/config';
import { Constants } from './../class/constants';
import { AbstractHttpService } from './../../services/abstract-http.service';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MainTabs } from '../model/main-tabs';

@Injectable({
  providedIn: 'root'
})
export class UiService extends AbstractHttpService implements OnInit {
  darkModeState: BehaviorSubject<boolean>;
  config: Config;
  constructor(
    private http: HttpClient,
    configLoader: ConfigLoaderService
  ) {
    super(http);
    this.config = configLoader.getConfigData();
    this.darkModeState = new BehaviorSubject<boolean>(false);
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }

  public getIconsData(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const url = 'https://gist.githubusercontent.com/aloketewary/7b696088f1f979cc904632bc9048eab9/raw/c27590c91ad5494ca3e8861c02eedcd537e4e1ff/material-icons-list-json.json';
    return this.http.get(url);
  }

  public getMainTabs(): Observable<MainTabs> {
    return this.http.get<MainTabs>(this.config['MAIN_TABS_URL'])
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
}
