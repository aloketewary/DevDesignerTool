import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBottomSheetComponent } from './icon-bottom-sheet.component';

describe('IconBottomSheetComponent', () => {
  let component: IconBottomSheetComponent;
  let fixture: ComponentFixture<IconBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
