import { ObservableMedia } from '@angular/flex-layout';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

import { DialogService } from '../../../shared/services/dialog.service';
import { PopColorsModel, PopupColorVariation } from '../../model/popup-color.model';

@Component({
  selector: 'app-palletes',
  templateUrl: './palletes.component.html',
  styleUrls: ['./palletes.component.scss']
})
export class PalletesComponent implements OnInit {

  primaryColor: PopColorsModel;
  accentColor: PopColorsModel;
  selectedColorList: Array<SelectedColor>;
  ifAdd: boolean;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  constructor(
    private dialogService: DialogService,
    public media: ObservableMedia
  ) {
    this.selectedColorList = JSON.parse(localStorage.getItem('palleteList')) || new Array<SelectedColor>(0);
    this.ifAdd = false;
  }

  ngOnInit() {
    this.primaryColor = new PopColorsModel();
    this.accentColor = new PopColorsModel();
  }

  openPrimaryColors() {
    this.dialogService.openColorsPopup(true).subscribe((val) => {
      this.primaryColor = val;
    });
  }

  openAccentColors() {
    this.dialogService.openColorsPopup(false).subscribe((val) => {
      this.accentColor = val;
    });
  }

  addSelectedColor() {
    this.selectedColorList.push(new SelectedColor(this.primaryColor.variations[0], this.accentColor.variations[0]));
    localStorage.setItem('palleteList', JSON.stringify(this.selectedColorList));
    this.primaryColor = new PopColorsModel();
    this.accentColor = new PopColorsModel();
  }

  // fabButtonEventHandler(eventData) {
  //   switch (eventData) {
  //     case FabButtonActionType.ADD:
  //       this.addSelectedColor();
  //       break;
  //     case FabButtonActionType.ADD:

  //       break;
  //     default:
  //       this.addSelectedColor();
  //       break;
  //   }
  // }

  fabButtonEventHandler(eventData) {
    if (eventData) {
      this.addSelectedColor();
    }
    this.ifAdd = !this.ifAdd;
  }

  isButtonDisabled() {
    if (!this.ifAdd) {
      return false;
    }
    if (this.primaryColor.variations.length > 0 && this.accentColor.variations.length > 0) {
      return false;
    }
    return true;
  }

  removeSelectedPallete(pallete) {
    this.selectedColorList.splice(this.selectedColorList.indexOf(pallete), 1);
    localStorage.setItem('palleteList', JSON.stringify(this.selectedColorList));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.selectedColorList, event.previousIndex, event.currentIndex);
  }

  swipe(eType: any, index: any) {
    if (eType === this.SWIPE_ACTION.LEFT) {
      this.selectedColorList.splice(index, 1);
    } else if (eType === this.SWIPE_ACTION.RIGHT) {
      this.selectedColorList.splice(index, 1);
    }
  }
}

class SelectedColor {
  headerColor: PopupColorVariation;
  fabColor: PopupColorVariation;
  constructor(_headerColor?: PopupColorVariation, _fabColor?: PopupColorVariation) {
    this.headerColor = _headerColor;
    this.fabColor = _fabColor;
  }
}
