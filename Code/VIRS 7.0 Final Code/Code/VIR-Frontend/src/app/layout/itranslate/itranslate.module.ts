
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItranslateRoutingModule } from './itranslate-routing.module';
import { ItranslateComponent } from './itranslate.component';
import { TextService } from '../../shared'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClient } from '@angular/common/http';
import { iTranslation } from '../../shared'
import { iTranslateService } from '../../shared/services'

@NgModule({
  imports: [
    CommonModule,
    ItranslateRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    NgbDropdownModule.forRoot()

  ],
  declarations: [ ItranslateComponent ],
  providers: [iTranslateService],
})
export class ItranslateModule { }
