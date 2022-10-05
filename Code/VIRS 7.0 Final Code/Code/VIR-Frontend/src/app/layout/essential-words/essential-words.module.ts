import { DefinitionService } from './../../shared/services/definition.service';
import { WordsListService } from './../../shared/services/wordsList.service';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EssentialWordsRoutingModule } from './essential-words-routing.module';
import { EssentialWordsComponent } from './essential-words.component';
import { TextService } from '../../shared';


@NgModule({
  imports: [
    CommonModule,
    EssentialWordsRoutingModule,
    NgbModule.forRoot(),
    FormsModule,

  ],
  declarations: [ EssentialWordsComponent ],
  providers: [WordsListService, DefinitionService],
})
export class EssentialWordsModule { }
