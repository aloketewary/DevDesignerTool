import { ConfigLoaderService } from './../../config-loader.service';
import { Config } from './../../models/config';
import { Constants } from './../class/constants';
import { AbstractHttpService } from './../../services/abstract-http.service';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MainTabs } from '../model/main-tabs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  darkModeState: BehaviorSubject<boolean>;
  config: Config;
  constructor(
    private http: HttpClient,
    configLoader: ConfigLoaderService
  ) {
    this.config = configLoader.getConfigData();
    this.darkModeState = new BehaviorSubject<boolean>(false);
  }

  public getIconsData(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const url = 'https://gist.githubusercontent.com/aloketewary/7b696088f1f979cc904632bc9048eab9/raw/c27590c91ad5494ca3e8861c02eedcd537e4e1ff/material-icons-list-json.json';
    return this.http.get(url);
  }

  public getMainTabs(): Observable<MainTabs[]> {
    return this.http.get<MainTabs[]>(this.config['MAIN_TABS_URL'])
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
