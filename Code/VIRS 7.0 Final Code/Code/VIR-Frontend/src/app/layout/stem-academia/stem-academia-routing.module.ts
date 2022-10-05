import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StemAcademiaComponent } from './stem-academia.component';

const routes: Routes = [
    { path: '', component: StemAcademiaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StemAcademiaRoutingModule { }
