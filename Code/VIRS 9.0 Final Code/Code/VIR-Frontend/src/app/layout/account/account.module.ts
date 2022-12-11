import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { UserAccountRoutingModule } from './account-routing.module';
import { UserAccount } from './account.component';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule.forRoot(),
        UserAccountRoutingModule,
        NgbModule.forRoot(),
        FormsModule,
    ],
    declarations: [
        UserAccount,
    ]
})
export class UserAccountModule { }
