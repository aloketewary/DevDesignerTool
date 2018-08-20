import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UiService implements OnInit {
  darkModeState: BehaviorSubject<boolean>;
  constructor(
    private http: HttpClient
  ) {
    // TODO: if the user is signed in get the default value from Firebase
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
}
