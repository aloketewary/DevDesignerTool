import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { UiService } from '../../shared/services/ui.service';
import { AboutModel } from '../model/about.model';

@Injectable({
    providedIn: 'root'
})
export class AboutResolver implements Resolve<AboutModel[]> {
  constructor(private uiService: UiService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AboutModel[]> {
    return this.uiService.getChangeLog();
  }
}
