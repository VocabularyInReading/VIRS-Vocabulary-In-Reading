import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocRoutingModule } from './doc-routing.module';
import { DocComponent } from './doc.component';
import { TextService } from '../../shared'

@NgModule({
  imports: [
    CommonModule,
    DocRoutingModule,
    FormsModule
  ],
  declarations: [DocComponent],
  providers: [TextService],
})
export class DocModule { }
