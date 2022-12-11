import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextRoutingModule } from './text-routing.module';
import { TextComponent } from './text.component';
import { TextService } from '../../shared'

@NgModule({
  imports: [
    CommonModule,
    TextRoutingModule,
    FormsModule
  ],
  declarations: [TextComponent],
  providers: [TextService],
})
export class TextModule { }
