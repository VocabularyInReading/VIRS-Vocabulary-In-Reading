import { Injectable, Inject } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { SafeResourceUrl } from "@angular/platform-browser";

@Injectable()
export class DownloadListService {
    constructor(private http: HttpClient) {}

    downloadWordList(categories: string[]) {
        // console.log(`/api/download/${categories}`);
        // return this.http.get<any>(`/api/download/${categories}`);
        // .do((res) => console.log(res));
        fetch(`http://localhost:8080/api/download/${categories}`).then(
            (response) => {
                // Access-Control-Expose-Headers: *;
                // const headers = response.headers;
                // console.log(headers);
                // const filename = response.headers.get("Content-Disposition");
                // .split("filename=")[1]
                // .split(";")[0];
                // console.log(response.headers.get("Content-Disposition"));
                console.log(response);
                // console.log("Hey " + filename.toString);
                response.blob().then((blob) => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement("a");
                    a.href = url;
                    a.download = `${categories}.csv`;
                    a.click();
                });
            }
        );
        // const headers = new HttpHeaders()
        // headers.set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*')
        // // .set('content-disposition', )
        // const response = this.http.get<Response>(`/api/download/${categories}`, {'headers': headers})
        //         console.log(headers);
        //         const filename = headers.get("Content-Disposition");
        //         // .split("filename=")[1]
        //         // .split(";")[0];
        //         // console.log(response.headers.get("Content-Disposition"));
        //         console.log(response);
        //         console.log("Hey " + filename.toString);
        //         response.blob().then((blob) => {
        //             let url = window.URL.createObjectURL(blob);
        //             let a = document.createElement("a");
        //             a.href = url;
        //             a.download = `${categories}.csv`;
        //             a.click();
        //         });
        //     }
        // );
    }
}
