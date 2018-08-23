import { Config } from './../../../models/config';
import { ConfigLoaderService } from 'src/app/config-loader.service';
import { IconsList } from './../../models/icon-data';
import { IconsProperty } from '../../models/icon-data';
import { UiService } from './../../../shared/services/ui.service';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatSnackBar } from '@angular/material';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { saveAs } from 'file-saver';
import { Language } from 'angular-l10n';

@Component({
  selector: 'app-icon-bottom-sheet',
  templateUrl: './icon-bottom-sheet.component.html',
  styleUrls: ['./icon-bottom-sheet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconBottomSheetComponent implements OnInit {
  @Language() lang: string;
  copyMatForModernBrowser: string;
  copyMatForOlderBrowser: string;
  config: Config;
  constructor(
    private bottomSheetRef: MatBottomSheetRef<IconBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {icon: IconsProperty, listFor: IconsList},
    public snackBar: MatSnackBar,
    private uiService: UiService,
    configLoader: ConfigLoaderService
  ) {
    this.config = configLoader.getConfigData();
   }

  ngOnInit() {
    if (this.data.listFor.for === this.config['ICONS_NAME_MATERIAL']) {
      this.copyMatForModernBrowser = `<i class="material-icons">${this.data.icon.ligature}</i>`;
      this.copyMatForOlderBrowser = `<i class="material-icons">${this.data.icon.ligature}</i>`;
    } else if (this.data.listFor.for === this.config['ICONS_NAME_FA']) {
      this.copyMatForModernBrowser = `<i class="fa ${this.data.icon.ligature}" aria-hidden="true"></i>`;
      this.copyMatForOlderBrowser = `<i class="fa ${this.data.icon.ligature}" aria-hidden="true"></i>`;
    }
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.openSnackBar('Copy Successfully to the clipboard!');
  }

  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  downloadFile(iconName: string) {
    this.uiService.downloadIcon(iconName).subscribe((data) => {
      saveAs(data, `${iconName}.svg`);
    });
  }

  getFAIcon(faObj: IconsProperty) {
    return `<i class="fa ${faObj.ligature}" aria-hidden="true"></i>`;
  }
}
