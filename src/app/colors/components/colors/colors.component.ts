import { TranslationService } from 'angular-l10n';
import { isNumber } from 'util';

import { animate, style, transition, trigger } from '@angular/animations';
import { UpperCasePipe } from '@angular/common';
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

import { UiService } from '../../../shared/services/ui.service';
import { UtilService } from '../../../shared/services/util.service';
import { ColorsModel, ColorVariation } from '../../models/colors.model';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition('void => *', [
          // 'From' styles
          style({
            opacity: 0.2,
          }),
          animate('1000ms ease-in')
        ]),

        // :LEAVE TRANSITION
        // 2 - Uncomment this to apply the leave transition
        // transition('* => void', [
        //   animate('1000ms ease-in-out',
        //     style({
        //       opacity: 0.2,
        //       // transform: 'translateX(100%)'
        //     })
        //   )
        // ]),
      ]
    )
  ]
})
export class ColorsComponent implements OnInit {
  clickedPrimary: ColorVariation;
  materialColors = new Array<ColorsModel>();
  colorName: string;
  colorInRGB: Array<number>;
  colorEventType = ColorEventType;
  constructor(
    private renderer2: Renderer2,
    private uiService: UiService,
    public translationService: TranslationService,
    public utilService: UtilService
  ) {
  }

  ngOnInit() {
    this.clickedPrimary = new ColorVariation();
    this.uiService.getColorsData().subscribe((_colorData) => {
      this.materialColors = _colorData;
    });
  }

  // For Material Card shadow handle not own specific css trick
  matElevationAdd(ev: Event) {
    this.renderer2.addClass(ev.target, 'mat-elevation-z12');
  }

  matElevationRemove(ev: Event) {
    this.renderer2.removeClass(ev.target, 'mat-elevation-z12');
  }

  cardClicked(_colorName: string, col: ColorVariation) {
    this.clickedPrimary = col;
    this.colorName = _colorName;
    this.convertHexToRGB(col.hex);
  }

  convertHexToRGB(hex: string) {
    this.colorInRGB = [
      parseInt((hex).substring(1, 3), 16),
      parseInt((hex).substring(3, 5), 16),
      parseInt((hex).substring(5, 7), 16),
    ];
  }

  convertHexToRGBA() {
    return this.colorInRGB.map((value) => (value / 255).toFixed(3));
  }

  getMaterializeCssText(isBackGround) {
    if (isBackGround) {
      return this.colorName.replace(' ', '-').toLocaleLowerCase() + ' ' + this.clickedPrimary.label;
    } else {
      return this.colorName.replace(' ', '-').toLocaleLowerCase() + '-text text-' + this.clickedPrimary.label;
    }
  }

  checkForDarkColor(colorWeight: string | number) {
    return Number(typeof colorWeight === 'number' ? colorWeight : colorWeight.replace('A', '')) > 300;
  }

  getTranslationText(isPrimary: boolean) {
    const transtext = isPrimary ? 'COLORS.TEXT.PRIMARY' : 'COLORS.TEXT.ACCENT';
    return this.translationService.translate(transtext);
  }

  hexToCMYK(hex) {
    let computedC = 0;
    let computedM = 0;
    let computedY = 0;
    let computedK = 0;

    hex = (hex.charAt(0) === '#') ? hex.substring(1, 7) : hex;

    if (hex.length !== 6) {
      alert('Invalid length of the input hex value!');
      return;
    }
    if (/[0-9a-f]{6}/i.test(hex) !== true) {
      alert('Invalid digits in the input hex value!');
      return;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // BLACK
    if (r === 0 && g === 0 && b === 0) {
      computedK = 1;
      return [0, 0, 0, 1];
    }

    computedC = 1 - (r / 255);
    computedM = 1 - (g / 255);
    computedY = 1 - (b / 255);

    const minCMY = Math.min(computedC, Math.min(computedM, computedY));

    computedC = (computedC - minCMY) / (1 - minCMY);
    computedM = (computedM - minCMY) / (1 - minCMY);
    computedY = (computedY - minCMY) / (1 - minCMY);
    computedK = minCMY;

    return [computedC.toFixed(3), computedM.toFixed(3), computedY.toFixed(3), computedK.toFixed(3)];
  }

  copyToClipboard(colorEvent: ColorEventType, text?: string, ) {
    switch (colorEvent) {
      case ColorEventType.HEX:
        this.utilService.copyMessage(new UpperCasePipe().transform(text));
        break;
      case ColorEventType.RGB:
        this.utilService.copyMessage('rgb(' + this.colorInRGB[0] + ', ' + this.colorInRGB[1] + ', ' + this.colorInRGB[2] + ')');
        break;
      case ColorEventType.CMYK:
        this.utilService.copyMessage(this.hexToCMYK(text).toLocaleString());
        break;
      case ColorEventType.CSS:
        // tslint:disable-next-line:max-line-length
        this.utilService.copyMessage('background-color: rgba(' + this.colorInRGB[0] + ', ' + this.colorInRGB[1] + ', ' + this.colorInRGB[2] + ', 1);');
        break;
      case ColorEventType.MAT_BACK_CSS:
        this.utilService.copyMessage(this.getMaterializeCssText(true));
        break;
      case ColorEventType.MAT_TEXT_CSS:
        this.utilService.copyMessage(this.getMaterializeCssText(false));
        break;
      default:
        break;
    }
  }
}

enum ColorEventType {
  HEX,
  RGB,
  CMYK,
  CSS,
  SWIFT_UI,
  MAT_BACK_CSS,
  MAT_TEXT_CSS
}
