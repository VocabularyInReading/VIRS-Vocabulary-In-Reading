import { DefinitionService } from './../../shared/services/definition.service';
import { WordsListService } from './../../shared/services/wordsList.service';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DictionaryRoutingModule } from './dictionary-routing.module';
import { DictionaryComponent } from './dictionary.component';
import { TextService } from '../../shared'


@NgModule({
  imports: [
    CommonModule,
    DictionaryRoutingModule,
    NgbModule.forRoot(),
    FormsModule,

  ],
  declarations: [ DictionaryComponent ],
  providers: [WordsListService, DefinitionService],
})
export class DictionaryModule { }
