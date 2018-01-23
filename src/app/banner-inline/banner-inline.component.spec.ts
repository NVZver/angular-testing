import { BannerInlineModule } from 'app/banner-inline/banner-inline.module';
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BannerInlineComponent } from 'app/banner-inline/banner-inline.component';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';

describe('BannerComponent', () => {
  let comp: BannerInlineModule;
  let fixture: ComponentFixture<BannerInlineComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerInlineComponent],
      providers: [
        // { provide: ComponentFixtureAutoDetect, useValue: true } // For Automatic change detecting.
      ]
    });

    fixture = TestBed.createComponent(BannerInlineComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  /**
   * It works only while "ComponentFixtureAutoDetect" is provided;
  it('should display original title', () => {
    expect(el.textContent).toContain(comp.title);
  });

  it('should still see original title after comp.title change', () => {
    const oldTitle = comp.title;
    comp.title = 'Test Title';
    expect(el.textContent).toContain(oldTitle);
  });

  it('should display updated title after detectChanges', () => {
    comp.title = 'Test Title';
    fixture.detectChanges(); // detect changes explicitly
    expect(el.textContent).toContain(comp.title);
  });
   */

  /** Tests with manual change detecting */
  it('no title in the DOM until manually call "detechChanges"', () => {
    expect(el.textContent).toBe('');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });
});
