import { Constants } from './shared/class/constants';
import { Config } from './models/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService {

  private config: Config;

  constructor(private http: HttpClient) {
    this.config = {};
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
