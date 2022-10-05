import { Injectable, Inject, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPage, IWord } from '../interface'
import 'rxjs/add/operator/do';


@Injectable()
export class AdminService {


  constructor(private http: HttpClient) {
  }

  // To get word ID, Value and Category
  getWord(word: string): Observable<IWord> {
    return this.http.get<IWord>(`/api/admin/words/${word}`)
      .do((res => console.log(res)));
  }

  //delete all words in category
  deleteAllInCategory(category: string) {
    console.log('in deleteALlInCategory');
    return this.http.get(`/api/admin/words/delete/${category}`)
      .do((res => console.log(res)));
  }

  // To add new word to data base
  postWord(inputValue: string, inputCategory: string) {
    return this.http.post(`/api/admin/words`,
      (
        {
          'category': inputCategory,
          'value': inputValue
        }
      ))
      .do((res => console.log(res)));
  }


  // To Edit an existing word in data base
  putWord(inputValue: string, inputCategory: string, inputId: number) {
    return this.http.post(`/api/admin/words`,
      (
        {
          'category': inputCategory,
          'value': inputValue,
          'id': inputId
        }
      ))
      .do((res => console.log(res)));
  }

  // To Delete a word from database
  deleteWord(word: string): Observable<IWord> {
    return this.http.delete<IWord>(`/api/admin/words/${word}`)
      .do((res => console.log(res)));
  }

}


