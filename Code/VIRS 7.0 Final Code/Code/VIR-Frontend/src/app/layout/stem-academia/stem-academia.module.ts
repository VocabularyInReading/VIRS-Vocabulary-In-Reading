import { DefinitionService } from '../../shared/services/definition.service';
import { WordsListService } from '../../shared/services/wordsList.service';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StemAcademiaRoutingModule } from './stem-academia-routing.module';
import { StemAcademiaComponent } from './stem-academia.component';
import { TextService } from '../../shared'


@NgModule({
  imports: [
    CommonModule,
    StemAcademiaRoutingModule,
    NgbModule.forRoot(),
    FormsModule,

  ],
  declarations: [ StemAcademiaComponent ],
  providers: [WordsListService, DefinitionService],
})
export class StemAcademiaModule { }
