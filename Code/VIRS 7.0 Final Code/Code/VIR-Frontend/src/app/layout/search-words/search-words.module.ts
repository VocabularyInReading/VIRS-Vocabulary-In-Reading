import { DefinitionService } from './../../shared/services/definition.service';
import { WordsListService } from './../../shared/services/wordsList.service';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchWordsRoutingModule } from './search-words-routing.module';
import { SearchWordsComponent } from './search-words.component';
import { TextService } from '../../shared';


@NgModule({
  imports: [
    CommonModule,
    SearchWordsRoutingModule,
    NgbModule.forRoot(),
    FormsModule,

  ],
  declarations: [ SearchWordsComponent ],
  providers: [WordsListService, DefinitionService],
})
export class SearchWordsModule { }
