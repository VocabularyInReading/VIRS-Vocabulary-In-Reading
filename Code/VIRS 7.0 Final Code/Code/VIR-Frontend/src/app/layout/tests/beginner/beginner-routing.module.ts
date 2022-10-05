import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeginnerComponent } from './beginner.component';
import { BeginnerTestBank } from '../../../shared/services/testBanks/beginnerTestBank.service';

const routes: Routes = [
    { path: '', component: BeginnerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [BeginnerTestBank]
})
export class BeginnerRoutingModule { }
