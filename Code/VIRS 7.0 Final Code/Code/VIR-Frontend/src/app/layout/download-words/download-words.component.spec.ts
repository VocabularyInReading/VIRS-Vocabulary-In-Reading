import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadWordsComponent } from './download-words.component';

describe('DownloadWordsComponent', () => {
  let component: DownloadWordsComponent;
  let fixture: ComponentFixture<DownloadWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
