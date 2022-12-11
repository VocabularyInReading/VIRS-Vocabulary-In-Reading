import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreditsRoutingModule } from './credits-routing.module';
import { CreditsComponent } from './credits.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    CreditsRoutingModule
  ],
  declarations: [CreditsComponent]
})
export class CreditsModule { }
