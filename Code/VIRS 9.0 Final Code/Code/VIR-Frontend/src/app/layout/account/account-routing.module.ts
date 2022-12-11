import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccount } from './account.component';

const routes: Routes = [
    { path: '', component: UserAccount }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class UserAccountRoutingModule { }
