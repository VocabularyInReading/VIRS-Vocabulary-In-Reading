import { Component, Input, NgModule, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TextService, IText } from '../../shared'
import { Router } from '@angular/router';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  animations: [routerTransition()],
})
export class TextComponent implements OnInit {

  @Input() textArea: string;
  text: IText;
  processing: boolean;
  error: boolean;
  constructor(private _textService: TextService, public router: Router) { }

  // Function for enhanced text
  analyzeText(url: string): void {
    this.processing = true;
    this.error = false;
    this._textService.enhancedText(this.textArea)
      .subscribe
      (res => {
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


  ngOnInit() {
    window.scrollTo(0, 0);
  }


}


