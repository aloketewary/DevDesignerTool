import { IconBottomSheetComponent } from './../icon-bottom-sheet/icon-bottom-sheet.component';
import { IconData, IconsProperty } from './../../models/icon-data';
import { UiService } from './../../shared/services/ui.service';
import { ConfigLoaderService } from './../../config-loader.service';
import { Config } from './../../models/config';
import { Language } from 'angular-l10n';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class IconsComponent implements OnInit, OnDestroy {

  selectedIcon: IconsProperty;
  @Language() lang: string;
  private config: Config;
  icons: Array<IconData>;
  isLoading: boolean;
  isSmallDevice: boolean;
  constructor(
    configLoader: ConfigLoaderService,
    private uiService: UiService,
    private bottomSheet: MatBottomSheet,
    private observableMedia: ObservableMedia,
  ) {
    this.isLoading = true;
    this.config = configLoader.getConfigData();
    this.selectedIcon = new IconsProperty();
    this.icons = new Array<IconData>();
  }

  ngOnInit() {
    this.uiService.getIconsData().subscribe((_icons) => {
      this.icons = _icons;
      this.isLoading = false;
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

  getColorsByIconSelection(ico): string {
    return this.selectedIcon.ligature === ico ? 'accent' : 'default';
  }

  getIconSelection(ligature): boolean {
    return this.selectedIcon.ligature === ligature;
  }

  openBottomSheet(): void {
    this.bottomSheet.open(IconBottomSheetComponent, {data: this.selectedIcon});
  }

}
