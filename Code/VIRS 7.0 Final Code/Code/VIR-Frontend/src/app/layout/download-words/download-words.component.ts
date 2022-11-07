import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DownloadListService } from "app/shared";

@Component({
    selector: "app-download-words",
    templateUrl: "./download-words.component.html",
    styleUrls: ["./download-words.component.scss"],
})
export class DownloadWordsComponent implements OnInit {
    error: boolean;
    processing: boolean;
    file: Blob;

    constructor(private _downloadListService: DownloadListService) {}

    ngOnInit() {}

    // startDownload(category: string) {
    //     this.processing = true;
    //     this.error = false;
    //     var categories: string[] = ["K1", "K2"];
    //     // this._downloadListService.downloadWordList(categories).subscribe(
    //     //     (res) => {
    //     //         // console.log("Hey");
    //     //         // this.processing = false;
    //     //         // this.file = res;
    //     //         // console.log(res);
    //     //     },
    //     //     (err: HttpErrorResponse) => {
    //     //         if (err.error instanceof Error) {
    //     //             console.log("Client-side Error occured");
    //     //         } else {
    //     //             this.error = true;
    //     //             this.processing = false;
    //     //             console.log("Server-side Error occured");
    //     //         }
    //     //     }
    //     // );
    //     this._downloadListService.downloadWordList(categories);
    // }

    startDownload(categories: string[]) {
        this.processing = true;
        this.error = false;
        this._downloadListService.downloadWordList(categories);
    }
}
