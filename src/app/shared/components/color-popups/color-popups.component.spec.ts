import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPopupsComponent } from './color-popups.component';

describe('ColorPopupsComponent', () => {
  let component: ColorPopupsComponent;
  let fixture: ComponentFixture<ColorPopupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPopupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
