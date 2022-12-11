import { Component, Input, NgModule, OnInit, ElementRef, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TextService, IText } from '../../shared'
import { iTranslateService } from '../../shared/services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  animations: [routerTransition()]
})
export class ImageComponent implements OnInit {

  @ViewChild('fileInput') fileInput;

  text: IText;
  processing: boolean;
  userImageFile: File;
  error: boolean;
  fileSizeExceeded: boolean;
  formData: FormData;
  constructor(private _textService: TextService, public router: Router, private elem: ElementRef, private http: HttpClient, private _itranslate:iTranslateService) { }

  processTextResults(translatedResults: string, url : string)
  {
    this._textService.enhancedText(translatedResults)
    .subscribe
    (res =>
    {
      if(!res || !res.words || res.words.length == 0)
      {
        this.error = true;
        this.processing = false;
        return;
      }//if
      this.text = res;
      this._textService.resultText = this.text;
      this.processing = false;
      this.router.navigateByUrl(url);
    },
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

  translateResults(results: string, url: string)
  {
    this._itranslate.getTranslation(results, "en")
      .subscribe
      (
          (rec:any) =>
          {
            var translated = this._itranslate.retrieveTextFromResults(rec);
            if(!translated || translated === "")
            {
              this.error = true;
              this.processing = false;
              results = null;
              return;
            }//if

            this.processTextResults(translated, url);
          },
          (err: HttpErrorResponse) =>
          {
            this.error = true;
            this.processing = false;
          }
      );
  }

  public uploadImage(url: string): void {
    this.formData = new FormData();
    this.processing = true;
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      this.userImageFile = fileBrowser.files[0];

      // check filesize
      if (this.userImageFile.size > 26214400) {
        this.fileSizeExceeded = true;
        this.processing = false;
        return;
      }

      this.formData.append('file', fileBrowser.files[0]);
    } else {
      return;
    }

    const DocFile: File = this.userImageFile;
    this._textService.enhancedImage(this.formData)
      .subscribe
      (
        res =>
        {
          var results = this._itranslate.transformTextToString(res);
          if(results === "")
          {
            this.error = true;
            this.processing = false;
            results = null;
            return;
          }//if

          this.translateResults(results, url);
        },
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
