import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { speedDialFabAnimations } from './speed-dial-fab.animations';

@Component({
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  animations: speedDialFabAnimations
})
export class SpeedDialFabComponent implements OnInit {

  fabButtons = [
    {
      icon: 'add',
      action: FabButtonActionType.ADD
    },
    {
      icon: 'file_download',
      action: FabButtonActionType.DOWNLOAD
    }
  ];

  buttons = [];
  fabTogglerState = 'inactive';
  @Output() actionEvent = new EventEmitter<FabButtonActionType>();
  @Input() disabled: boolean;
  constructor() { }

  ngOnInit() { }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  fabAction(actionType: FabButtonActionType) {
    this.actionEvent.next(actionType);
  }
}

export enum FabButtonActionType {
  ADD,
  DOWNLOAD
}
