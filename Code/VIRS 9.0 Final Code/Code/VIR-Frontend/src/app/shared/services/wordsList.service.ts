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

  getData(page: number, category: string,grade: string, size: number, sort: string): Observable<IPage> {
    return this.http.get<IPage>(`/api/words?category=${category}&grade=${grade}&page=${page}&size=${size}&sortKey=value&sortDirection=${sort}`)
      .do((res => console.log(res)));
  }

  getLiveWordList(pageNumber: number = 0, category: string, grade: string, size: number, sort: string, value: string): Observable<IPage> {
    if (value == null)
      return this.http.get<IPage>(`/api/words?category=${category}&grade=${grade}&page=${pageNumber}&size=${size}&sortKey=value&sortDirection=${sort}`)

    return this.http.get<IPage>(`/api/words/valueandcat?value=${value}&category=${category}&grade=${grade}&page=${pageNumber}&size=${size}&sortKey=value&sortDirection=${sort}`)
      .do((res => console.log("Response:", res)));
  }

  // To get word ID, Value and Category
  getWord(word: string, categories: string): Observable<IWord> {
    return this.http.get<IWord>(`/api/words/${word}/${categories}`)
      .do((res => console.log(res)));
  }
}


