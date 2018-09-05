import { DomSanitizer } from '@angular/platform-browser';
import { FontsData } from './../models/fonts-data';
import { UiService } from './../../shared/services/ui.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FontComponent implements OnInit {
  fontsDatas: Array<FontsData>;
  isLoading: boolean;
  constructor(
    private uiService: UiService,
    private _sanitizer: DomSanitizer
  ) {
    this.isLoading = true;
    this.fontsDatas = new Array<FontsData>();
   }

  ngOnInit() {
    this.uiService.getFontsData().subscribe((_fontsData) => {
      this.fontsDatas = _fontsData;
      this.isLoading = false;
    });
  }

  getFontName(fontData: FontsData) {
    const fontFamily = `"${fontData.family}", ${fontData.category}`;
    return fontFamily; // this._sanitizer.bypassSecurityTrustStyle(`url(${fontUrl})`);
  }

  getUrl (fontData: FontsData) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${fontData.files.regular})`);
  }

}
