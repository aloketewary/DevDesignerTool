import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MatDialog, MatDialogRef } from '@angular/material';

import { PopColorsModel } from '../../palletes/model/popup-color.model';
import { ColorPopupsComponent } from '../components/color-popups/color-popups.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog,
    private observableMedia: ObservableMedia) { }

  public openColorsPopup(_isPrimaryColors: boolean): Observable<PopColorsModel> {
    let widthData = '50vw';
    let heightData = '80vh';
    if (this.observableMedia.isActive('xs') || this.observableMedia.isActive('sm')) {
      widthData = '100vw';
      heightData = '100vh';
    }
    let dialogRef: MatDialogRef<ColorPopupsComponent>;
    dialogRef = this.dialog.open(ColorPopupsComponent, { disableClose: false,  minWidth: widthData, height: heightData });

    dialogRef.componentInstance.isPrimaryColors = _isPrimaryColors;
    return dialogRef.afterClosed();
  }
}
