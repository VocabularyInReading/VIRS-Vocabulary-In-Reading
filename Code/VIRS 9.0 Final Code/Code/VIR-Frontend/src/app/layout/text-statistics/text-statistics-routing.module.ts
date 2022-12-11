import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextStatisticsComponent } from './text-statistics.component';

const routes: Routes = [
    { path: '', component: TextStatisticsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TextStatisticsRoutingModule { }
