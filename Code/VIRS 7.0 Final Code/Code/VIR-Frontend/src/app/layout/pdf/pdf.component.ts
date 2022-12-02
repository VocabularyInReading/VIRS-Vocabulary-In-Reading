import { Component, Input, NgModule, OnInit, ElementRef, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TextService, IText } from '../../shared'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
  animations: [routerTransition()]
})
export class PdfComponent implements OnInit {

  @ViewChild('fileInput') fileInput;

  text: IText;
  processing: boolean; // loading spinner
  userPDFFile: File;
  error: boolean; // Error received from server
  fileSizeExceeded: boolean;  // input file size exceeded the limit
  formData: FormData;  // the file type that server (API) Accepts

  constructor(private _textService: TextService, public router: Router, private elem: ElementRef, private http: HttpClient) { }

  // Cast the input file to FormData - Upload PDF(FormData) to server
  // receive the analyzed PDF - navigate to the enhanced text page to show the result
  public uploadPDF(url: string): void {
    this.formData = new FormData();
    this.processing = true;
    this.error = false;
    const fileBrowser = this.fileInput.nativeElement; //could it be this constant or something else causing the uploads to stop working after a while
                                                      //the issue is possibly caused by memory running out after a while.
    if (fileBrowser.files && fileBrowser.files[0]) {
      this.userPDFFile = fileBrowser.files[0];

      // check the file size - more than 25mb will throw an alert to user
      if (this.userPDFFile.size > 26214400) {
        this.fileSizeExceeded = true;
        this.processing = false;
        return;
      }

      this.formData.append('file', fileBrowser.files[0]);
    } else {
      return;
    }

    const DocFile: File = this.userPDFFile;
    this._textService.enhancedPDF(this.formData)
      .subscribe
      (res => {
        this.text = res;
        this._textService.resultText = this.text;
        this.processing = false;
        this.router.navigateByUrl(url);
      },

      // Error Handling
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side Error occured');
        } else {
          this.error = true;
          this.processing = false;
          console.log('Server-side Error occured');
        }
      }
      );

  }



  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
