import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CreditsComponent } from './credits.component';

describe('CreditsComponent', () => {
  let component: CreditsComponent;
  let fixture: ComponentFixture<CreditsComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('div'));
    el = de.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the references', () => {
      expect(el.textContent).toContain('References');
  });
});
