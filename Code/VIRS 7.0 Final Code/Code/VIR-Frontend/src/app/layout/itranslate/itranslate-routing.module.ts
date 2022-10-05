import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItranslateComponent } from './itranslate.component';

const routes: Routes = [
    { path: '', component: ItranslateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItranslateRoutingModule { }
