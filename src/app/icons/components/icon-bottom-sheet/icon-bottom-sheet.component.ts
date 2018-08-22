import { IconsProperty } from '../../models/icon-data';
import { UiService } from './../../../shared/services/ui.service';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatSnackBar } from '@angular/material';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-icon-bottom-sheet',
  templateUrl: './icon-bottom-sheet.component.html',
  styleUrls: ['./icon-bottom-sheet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconBottomSheetComponent implements OnInit {
  copyMatForModernBrowser: string;
  constructor(
    private bottomSheetRef: MatBottomSheetRef<IconBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: IconsProperty,
    public snackBar: MatSnackBar,
    private uiService: UiService
  ) { }

  ngOnInit() {
    this.copyMatForModernBrowser = `<i class="material-icons">${this.data.ligature}</i>`;
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
}
