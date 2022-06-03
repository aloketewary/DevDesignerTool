import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DdtAppComponent } from './ddt-app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DdtAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DdtAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'DevDesignerTools'`, () => {
    const fixture = TestBed.createComponent(DdtAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('DevDesignerTools');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DdtAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('DevDesignerTools app is running!');
  });
});
