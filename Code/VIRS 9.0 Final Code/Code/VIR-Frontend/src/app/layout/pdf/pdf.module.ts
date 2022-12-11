import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PdfRoutingModule } from './pdf-routing.module';
import { PdfComponent } from './pdf.component';
import { TextService } from '../../shared'

@NgModule({
  imports: [
    CommonModule,
    PdfRoutingModule,
    FormsModule
  ],
  declarations: [PdfComponent],
  providers: [TextService],
})
export class PdfModule { }
