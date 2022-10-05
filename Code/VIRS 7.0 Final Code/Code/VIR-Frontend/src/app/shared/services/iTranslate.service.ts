import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { iTranslation } from 'app/shared/interface/iTranslation';
import 'rxjs/add/operator/do';
import { IText } from '../interface';



@Injectable()
export class iTranslateService
{
  constructor(private http: HttpClient) {
  }
  getTranslation(text: string, language: string)
  {
    return this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + language + "&hl=" + language + "&dt=t&q=" + encodeURI(text));
  }
  retrieveTextFromResults(rec : any) : string
  {
    var isArray = rec != null && Array.isArray(rec) && rec.length > 0;
    var results = [];
    if(isArray)
    {
      var isNestedArray = Array.isArray(rec[0]) && rec[0].length > 0;

      if(isNestedArray)
      {
        var n = rec[0].length;
        for(var i = 0; i < n; ++i)
        {
          var currentTextArray = rec[0][i];
          var isCurrentArray = currentTextArray != null && Array.isArray(currentTextArray) && currentTextArray.length > 0;
          if(isCurrentArray)
          {
            results.push(currentTextArray[0]);
          }//if
          currentTextArray = null;
          isCurrentArray = null;
        }//for i
        i = null;
        n = null;
      }//if
      isNestedArray = null;
    }//if
    isArray = null;

    var concatenated = results.length > 0 ? results.join(" ") : "";
    results = null;

    return concatenated;
  }
  transformTextToString(text : IText) : string
  {
    if(!text || !text.words || text.words.length == 0) return "";

    var words = [];
    var n = text.words.length;
    var i = 0;
    var tmp;
    for(; i < n; ++i)
    {
      tmp = text.words[i].initialValue;
      words.push(!tmp || tmp === "" ? "\n" : tmp + " ");
    }//for i
    tmp = null;
    i = null;
    n = null;
    var result = words.length > 0 ? words.join("") : "";

    words = null;
    
    return result;
  }
}