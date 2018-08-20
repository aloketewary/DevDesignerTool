import { PaginationService } from '../../services/pagination.service';
import { Constants } from '../../shared/class/constants';
import { Language } from 'angular-l10n';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { ScrollEvent } from 'ngx-scroll-event';

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
    ])
  ]
})
export class IconsComponent implements OnInit {

  selectedIcon: any;
  @Language() lang: string;
  constructor(
    private renderer2: Renderer2,
    public page: PaginationService
  ) {
    this.selectedIcon = { ligature: '' };
  }

  ngOnInit() {
    this.page.init(Constants.ICONS_COLLECTION, 'key', { limit: 1, reverse: false, prepend: false });
  }

  // For Material Card shadow handle not own specific css trick
  matElevationAdd(ev: Event) {
    this.renderer2.addClass(ev.target, 'mat-elevation-z8');
  }

  matElevationRemove(ev: Event) {
    this.renderer2.removeClass(ev.target, 'mat-elevation-z8');
  }

  selectIcon(ico) {
    this.selectedIcon = ico;
  }

  getColorsByIconSelection(ico): string {
    return this.selectedIcon.ligature === ico ? 'accent' : 'default';
  }

  getIconSelection(ligature): boolean {
    return this.selectedIcon.ligature === ligature;
  }

  public handleScroll(event: ScrollEvent) {
    console.log('scroll occurred', event.originalEvent);
    if (event.isReachingBottom) {
     this.page.more();
    }
    if (event.isReachingTop) {
      console.log(`the user is reaching the bottom`);
    }
    if (event.isWindowEvent) {
      console.log(`This event is fired on Window not on an element.`);
    }

  }
}
