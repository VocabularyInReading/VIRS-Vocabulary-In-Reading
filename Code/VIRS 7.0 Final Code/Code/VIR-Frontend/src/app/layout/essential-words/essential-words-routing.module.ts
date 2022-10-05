import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EssentialWordsComponent } from './essential-words.component';

const routes: Routes = [
    { path: '', component: EssentialWordsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EssentialWordsRoutingModule { }