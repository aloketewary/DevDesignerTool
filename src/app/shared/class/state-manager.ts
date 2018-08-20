import { MainTabs } from '../model/main-tabs';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class StateManager {
    private _activeTab: MainTabs;

    public set activeTab(v: MainTabs) {
        this._activeTab = v;
    }

    public get activeTab(): MainTabs {
        return this._activeTab;
    }


}
