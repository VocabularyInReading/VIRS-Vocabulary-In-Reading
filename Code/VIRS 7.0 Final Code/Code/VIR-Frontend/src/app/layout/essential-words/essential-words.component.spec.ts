import { WordsListService } from './../../shared/services/wordsList.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EssentialWordsComponent } from './essential-words.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { TextService } from '../../shared'
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefinitionService } from './../../shared/services/definition.service';

describe('EssentialWordsComponent', () => {
  let component: EssentialWordsComponent;
  let fixture: ComponentFixture<EssentialWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        FormsModule,
        NgbModule.forRoot(),
      ],
      declarations: [ EssentialWordsComponent ],
      providers: [
        TextService,
        DefinitionService,
        WordsListService,
        {provide: Router}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
