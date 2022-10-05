import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    ContactUsRoutingModule
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
