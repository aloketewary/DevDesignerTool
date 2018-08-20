import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return Observable.fromPromise(this.handleAccess(request, next)).do(
      succ => { },
      err => {
        if (err.status === 401) {
          this.router.navigateByUrl('/login');
        }
      }
    );
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler):
    Promise<HttpEvent<any>> {
    let isUploadUrl: boolean;
    const headerSettings: { [name: string]: string | string[]; } = {};

    if (request.headers.get('No-Auth') === 'True') {
      return next.handle(request.clone({
        headers: new HttpHeaders(headerSettings)
      })).toPromise();
    }
    if (request.url.startsWith('./assets')) {
      return next.handle(request.clone({
        headers: new HttpHeaders(headerSettings)
      })).toPromise();
    }
    if (request.headers.get('upload') === 'true') {
      isUploadUrl = true;
    } else {
      for (const key of request.headers.keys()) {
        headerSettings[key] = request.headers.getAll(key);
      }
    }
    let changedRequest = request;
    // HttpHeader object immutable - copy values

    if (isUploadUrl) {
      headerSettings['Content-Type'] = 'multipart/form-data';
    } else {
      headerSettings['Content-Type'] = 'application/json';
    }
    headerSettings['Accept'] = 'application/json';
    const newHeader = new HttpHeaders(headerSettings);

    changedRequest = request.clone({
      headers: newHeader
    });
    return next.handle(changedRequest).toPromise();

  }
}
