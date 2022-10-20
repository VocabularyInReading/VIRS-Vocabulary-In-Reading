import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchWordsComponent } from './search-words.component';

const routes: Routes = [
    { path: '', component: SearchWordsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchWordsRoutingModule { }