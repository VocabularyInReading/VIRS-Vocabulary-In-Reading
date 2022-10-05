import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IText } from '../interface'

import 'rxjs/add/operator/do';


@Injectable()
export class TextService {

  // TextService store the result from text component into resultText so later on can be passed to enhancedTextResultPage
  public resultText: IText;

  constructor(private http: HttpClient) {
  }

  enhancedText(textArea: string): Observable<IText> {
    return this.http.post<IText>('/api/analyzeText', textArea)
      .do((res => console.log(res)));
  }


  public enhancedDoc(formdata: FormData): Observable<IText> {
    return this.http.post<IText>('/api/analyzeFile?type=DOC', formdata)
      .do((res => console.log(res)));
  }

  public enhancedPDF(formdata: FormData): Observable<IText> {
    return this.http.post<IText>('/api/analyzeFile?type=PDF', formdata)
      .do((res => console.log(res)));
  }

  public enhancedImage(formdata: FormData): Observable<IText> {
    return this.http.post<IText>('/api/analyzeFile?type=IMG', formdata)
      .do((res => console.log(res)));
  }

}


