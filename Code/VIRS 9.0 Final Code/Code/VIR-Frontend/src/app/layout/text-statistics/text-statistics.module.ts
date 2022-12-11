import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextStatisticsRoutingModule } from './text-statistics-routing.module';
import { TextStatisticsComponent } from './text-statistics.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule as Ng2Charts } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    TextStatisticsRoutingModule,
    FormsModule,
    Ng2Charts,
    NgbModule.forRoot()
  ],
  declarations: [TextStatisticsComponent]
})
export class TextStatisticsModule { }
