import { DefinitionService } from './../../shared/services/definition.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnhancedTextResultRoutingModule } from './enhanced-text-result-routing.module';
import { EnhancedTextResultComponent } from './enhanced-text-result.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    EnhancedTextResultRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    InfiniteScrollModule
  ],
  declarations: [EnhancedTextResultComponent],
  providers: [DefinitionService],
})
export class EnhancedTextResultModule { }
