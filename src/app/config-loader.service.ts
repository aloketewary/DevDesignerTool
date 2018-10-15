import { Constants } from './shared/class/constants';
import { Config } from './models/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'secret-key': '$2a$10$VV2Zl2sZpLWFSifl6gZ3aurw6hbi8ExBJXXM777pqu8zfl4Db5Aua'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService {

  private config: Config;

  constructor(private http: HttpClient) {
    this.config = new Config();
  }

  public getConfigData(): Config {
    return this.config;
  }

  load(): Promise<any> {
    console.log(`getSettings:: before http.get call`);
    const promise = this.http.get(Constants.APP_CONFIG_LOCATION)
      .toPromise()
      .then((settings: Config) => {
        this.config = settings;
        return settings;
      });

    return promise;
  }
}
