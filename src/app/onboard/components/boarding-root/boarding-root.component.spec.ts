import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingRootComponent } from './boarding-root.component';

describe('BoardingRootComponent', () => {
  let component: BoardingRootComponent;
  let fixture: ComponentFixture<BoardingRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardingRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
