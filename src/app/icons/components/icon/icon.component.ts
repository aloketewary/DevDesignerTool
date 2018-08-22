import { IconsList } from './../../models/icon-data';
import { UiService } from './../../../shared/services/ui.service';
import { ConfigLoaderService } from 'src/app/config-loader.service';
import { Config } from './../../../models/config';
import { IconsProperty, IconData } from '../../models/icon-data';
import { IconBottomSheetComponent } from '../icon-bottom-sheet/icon-bottom-sheet.component';
import { Language } from 'angular-l10n';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { MatBottomSheet } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

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
  private config: Config;
  icons: Array<IconData>;
  isLoading: boolean;
  isSmallDevice: boolean;
  iconsList: Array<IconsList>;
  iconsLoading: boolean;
  constructor(
    configLoader: ConfigLoaderService,
    private uiService: UiService,
    private bottomSheet: MatBottomSheet,
    private observableMedia: ObservableMedia,
  ) {
    this.isLoading = true;
    this.iconsLoading = true;
    this.config = configLoader.getConfigData();
    this.selectedIcon = new IconsProperty();
    this.selectedIconList = new IconsList();
    this.icons = new Array<IconData>();
    this.iconsList = new Array<IconsList>();
  }

  ngOnInit() {
    this.getIconsData();
    this.uiService.getIconsList().subscribe((_list) => {
      this.iconsList = _list;
      this.isLoading = false;
    });
  }

  getIconsData() {
    this.uiService.getIconsData().subscribe((_icons) => {
      this.icons = _icons;
      this.iconsLoading = false;
    });
  }

  ngOnDestroy() {
    this.selectedIcon = new IconsProperty();
    this.icons = new Array<IconData>();
  }

  selectIcon(ico) {
    this.selectedIcon = this.selectedIcon !== ico ? ico : new IconsProperty();
    if (this.observableMedia.isActive('xs') || this.observableMedia.isActive('sm')) {
      this.isSmallDevice = true;
      this.openBottomSheet();
    }
  }

  selectedList(iconList) {
    this.selectedIconList = iconList;
  }

  getColorsByIconSelection(ico): string {
    return this.selectedIcon.ligature === ico ? 'accent' : 'default';
  }

  getIconSelection(ligature): boolean {
    return this.selectedIcon.ligature === ligature;
  }

  openBottomSheet(): void {
    this.bottomSheet.open(IconBottomSheetComponent, { data: this.selectedIcon });
  }

}
