import { Language } from 'angular-l10n';
import { Subscription } from 'rxjs';
import { ConfigLoaderService } from 'src/app/config-loader.service';

import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatBottomSheet, MatSnackBar } from '@angular/material';
import { Title, DomSanitizer } from '@angular/platform-browser';

import { Config } from '../../../models/config';
import { UiService } from '../../../shared/services/ui.service';
import { IconData, IconsList, IconsProperty } from '../../models/icon-data';
import { IconBottomSheetComponent } from '../icon-bottom-sheet/icon-bottom-sheet.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.1s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ]),
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
export class IconComponent implements OnInit, OnDestroy {

  selectedIcon: IconsProperty;
  selectedIconList: IconsList;
  @Language() lang: string;
  public config: Config;
  icons: Array<IconData>;
  isLoading: boolean;
  isSmallDevice: boolean;
  iconsList: Array<IconsList>;
  iconsLoading: boolean;
  searchVal: string;
  watcher: Subscription;
  copyMatForModernBrowser: string;
  copyMatForOlderBrowser: string;
  constructor(
    configLoader: ConfigLoaderService,
    private uiService: UiService,
    private bottomSheet: MatBottomSheet,
    private media: ObservableMedia,
    private titleService: Title,
    public snackBar: MatSnackBar,
    private sanitizer: DomSanitizer
  ) {
    this.isLoading = true;
    this.iconsLoading = true;
    this.config = configLoader.getConfigData();
    this.titleService.setTitle(`${this.config['PROJECT_NAME']} | Icons Library`);
    this.selectedIcon = new IconsProperty();
    this.selectedIconList = new IconsList();
    this.icons = new Array<IconData>();
    this.iconsList = new Array<IconsList>();
  }

  ngOnInit() {
    this.watcher = this.media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs' || change.mqAlias === 'sm') {
        this.isSmallDevice = true;
      } else {
        this.isSmallDevice = false;
      }
    });
    this.uiService.getIconsList().subscribe((_list) => {
      this.iconsList = _list;
      this.isLoading = false;
      this.selectedIconList = (_list === null || _list === undefined) ? new IconsList() : _list[0];
      this.getIconsData();
    });
  }

  getIconsData() {
    let selectedUrl: string;
    switch (this.selectedIconList.for) {
      case this.config['ICONS_NAME_MATERIAL']:
        selectedUrl = this.config['ICONS_DATA_URL'];
        break;
      case this.config['ICONS_NAME_MDI']:
        selectedUrl = this.config['ICONS_DATA_URL'];
        break;
      case this.config['ICONS_NAME_FA']:
        selectedUrl = this.config['FA_ICONS_DATA_URL'];
        break;
      default:
        selectedUrl = this.config['ICONS_DATA_URL'];
        break;
    }
    this.uiService.getIconsData(selectedUrl).subscribe((_icons) => {
      this.icons = _icons;
      this.iconsLoading = false;
    });
  }

  ngOnDestroy() {
    this.selectedIcon = new IconsProperty();
    this.icons = new Array<IconData>();
    this.watcher.unsubscribe();
  }

  selectIcon(ico) {
    this.selectedIcon = this.selectedIcon !== ico ? ico : new IconsProperty();
    if (this.selectedIcon.name !== null || this.selectedIcon.name !== undefined && this.isSmallDevice) {
      this.openBottomSheet();
    }
    if (this.selectedIconList.for === this.config['ICONS_NAME_MATERIAL']) {
      this.copyMatForModernBrowser = `<i class="material-icons">${this.selectedIcon.ligature}</i>`;
      this.copyMatForOlderBrowser = `<i class="material-icons">${this.selectedIcon.ligature}</i>`;
    } else if (this.selectedIconList.for === this.config['ICONS_NAME_FA']) {
      this.copyMatForModernBrowser = `<i class="fa ${this.selectedIcon.ligature}" aria-hidden="true"></i>`;
      this.copyMatForOlderBrowser = `<i class="fa ${this.selectedIcon.ligature}" aria-hidden="true"></i>`;
    }
  }

  selectedList(iconList) {
    this.iconsLoading = true;
    this.selectedIconList = iconList;
    this.getIconsData();
  }

  getColorsByIconSelection(ico): string {
    return this.selectedIcon.ligature === ico ? 'accent' : 'default';
  }

  getIconSelection(ligature): boolean {
    return this.selectedIcon.ligature === ligature;
  }

  openBottomSheet(): void {
    this.bottomSheet.open(IconBottomSheetComponent, { data: { icon: this.selectedIcon, listFor: this.selectedIconList } });
  }

  getFAIcon(faObj: IconsProperty) {
    return `<i class="fa ${faObj.ligature}" aria-hidden="true"></i>`;
  }

  getVoiceInput() {

  }

  // openLink(event: MouseEvent): void {
  //   this.bottomSheetRef.dismiss();
  //   event.preventDefault();
  // }

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
    this.selectedIcon = new IconsProperty();
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
