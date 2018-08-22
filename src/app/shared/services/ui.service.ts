import { IconsList } from './../../icons/models/icon-data';
import { IconData } from '../../icons/models/icon-data';
import { ConfigLoaderService } from './../../config-loader.service';
import { Config } from './../../models/config';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
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

  public getIconsData(url: string): Observable<IconData[]> {
    return this.http.get<IconData[]>(url)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        map((icon: any) => icon.categories),
        catchError(this.handleError) // then handle the error
      );
  }

  public getMainTabs(): Observable<MainTabs[]> {
    return this.http.get<MainTabs[]>(this.config['MAIN_TABS_URL'])
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  public getIconsList(): Observable<IconsList[]> {
    return this.http.get<IconsList[]>(this.config['ICONS_LIST_URL'])
      .pipe(
        retry(3), // retry a failed request up to 3 times
        // map((icon: any) => icon.categories),
        catchError(this.handleError) // then handle the error
      );
  }

  downloadIcon(iconName: string): Observable<Blob> {
    const download_endpoint = `https://material.io/tools/icons/static/icons/baseline-${iconName}-24px.svg`;
    return this.http.get(download_endpoint, {responseType: 'blob'});
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
