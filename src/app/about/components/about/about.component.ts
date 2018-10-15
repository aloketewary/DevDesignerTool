import { Language } from 'angular-l10n';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AboutModel } from '../../model/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Language() lang: string;
  changlogList: Array<AboutModel>;
  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.changlogList = this.activeRoute.snapshot.data.about;
  }

}
