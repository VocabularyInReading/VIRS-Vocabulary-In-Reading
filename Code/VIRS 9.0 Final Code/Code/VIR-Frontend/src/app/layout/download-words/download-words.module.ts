import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DownloadWordsRoutingModule } from "./download-words-routing.module";
import { DownloadWordsComponent } from "./download-words.component";
import { DownloadListService } from "app/shared";

@NgModule({
    imports: [
        CommonModule,
        DownloadWordsRoutingModule,
        NgbModule.forRoot(),
        FormsModule,
    ],
    declarations: [DownloadWordsComponent],
    providers: [DownloadListService],
})
export class DownloadWordsModule {}
