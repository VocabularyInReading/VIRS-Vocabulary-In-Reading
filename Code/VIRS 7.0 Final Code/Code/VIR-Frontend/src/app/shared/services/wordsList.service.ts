import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPage, IWord } from '../interface'
import 'rxjs/add/operator/do';


@Injectable()
export class WordsListService {


  constructor(private http: HttpClient) {
  }

  getData(page: number, category: string, size: number, sort: string): Observable<IPage> {
    return this.http.get<IPage>(`/api/words?category=${category}&page=${page}&size=${size}&sortKey=value&sortDirection=${sort}`)
      .do((res => console.log(res)));
  }


  // To get word ID, Value and Category
  getWord(word: string, categories: string): Observable<IWord> {
    return this.http.get<IWord>(`/api/words/${word}/${categories}`)
      .do((res => console.log(res)));
  }
}


