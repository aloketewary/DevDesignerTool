import { ConfigLoaderService } from 'src/app/config-loader.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MatDialogRef } from '@angular/material';

import { Config } from '../../../models/config';
import { PopColorsModel } from '../../../palletes/model/popup-color.model';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-color-popups',
  templateUrl: './color-popups.component.html',
  styleUrls: ['./color-popups.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorPopupsComponent implements OnInit {

  isPrimaryColors: boolean;
  config: Config;
  popupColorsList: Array<PopColorsModel>;
  constructor(
    public dialogRef: MatDialogRef<ColorPopupsComponent>,
    configLoader: ConfigLoaderService,
    private uiService: UiService,
    private observableMedia: ObservableMedia
  ) {
    this.config = configLoader.getConfigData();
    this.popupColorsList = new Array<PopColorsModel>(0);
  }

  ngOnInit() {
    this.uiService.getPopupColorsData().subscribe(async popupList => {
      await popupList.map((c) => {
        c.variations.forEach((val) => {
          const dataObj = new PopColorsModel();
          dataObj.color = c.color;
          if (val.isPrimary === this.isPrimaryColors) {
            dataObj.variations.push(val);
            this.popupColorsList.push(dataObj);
          }
        });

      });
      this.updateSize();
    });
  }

  updateSize() {
    if (this.observableMedia.isActive('xs') || this.observableMedia.isActive('sm')) {
      this.dialogRef.updateSize('100vw', '100vh');
    }
    this.dialogRef.updateSize('60vw', '80vh');
  }

  selectedColor(selectedColor) {
    this.dialogRef.close(selectedColor);
  }
}
