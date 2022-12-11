import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageRoutingModule } from './image-routing.module';
import { ImageComponent } from './image.component';
import { TextService } from '../../shared'
import { iTranslateService } from '../../shared/services'

@NgModule({
  imports: [
    CommonModule,
    ImageRoutingModule,
    FormsModule
  ],
  declarations: [ImageComponent],
  providers: [TextService, iTranslateService],
})
export class ImageModule { }
