import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        NgbModule.forRoot(),
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
