import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbAlertModule  } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent} from './change-password.component';

@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule.forRoot(),
    ChangePasswordRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  declarations:
  [
    ChangePasswordComponent
  ]
})
export class ChangePasswordModule { }