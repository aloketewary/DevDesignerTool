import { TranslationService } from 'angular-l10n';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor(private snackBar: MatSnackBar,
    private transService: TranslationService) {

  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    const copyText = this.transService.translate('APP.COPY.SUCCESSFULL_MSG');
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
    this.openSnackBar(val + ' ' + copyText);
  }

  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
