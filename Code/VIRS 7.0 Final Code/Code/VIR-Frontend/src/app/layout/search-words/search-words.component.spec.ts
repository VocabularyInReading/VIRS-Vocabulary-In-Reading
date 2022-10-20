import { WordsListService } from './../../shared/services/wordsList.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchWordsComponent } from './search-words.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { TextService } from '../../shared'
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefinitionService } from './../../shared/services/definition.service';

describe('SearchWordsComponent', () => {
  let component: SearchWordsComponent;
  let fixture: ComponentFixture<SearchWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        FormsModule,
        NgbModule.forRoot(),
      ],
      declarations: [ SearchWordsComponent ],
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
    fixture = TestBed.createComponent(SearchWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
