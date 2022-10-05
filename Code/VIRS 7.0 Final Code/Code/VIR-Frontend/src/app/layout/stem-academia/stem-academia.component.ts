import { Observable } from 'rxjs/Observable';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WordsListService, DefinitionService } from '../../shared'
import { Router } from '@angular/router';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IWord, IText, IDefinition, IPage } from '../../shared'
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-stem-academia',
  templateUrl: './stem-academia.component.html',
  styleUrls: ['./stem-academia.component.scss'],
  providers: [NgbPaginationConfig],
})
export class StemAcademiaComponent implements OnInit {
  page: IPage;
  turnOn: boolean;

  awlpage = 1;
  hipage = 1;
  medpage = 1;
  lowpage = 1;

  defaultPagination: number;
  advancedPagination: number;
  paginationSize: number;
  disabledPagination: number;
  isDisabled: boolean;
  tableSize: number;

  sort: string;
  activeCategory: string;
  wordCategory: string;

  processing: boolean;
  wordDefinition: IDefinition;
  text: IText;
  error: boolean;
  cleanWord: string;
  closeResult: string;

  resultCategory: string;
  searchTrigger: boolean = false;

  errorSearch: boolean;
  word: IWord;
  showTable = false;
  alertWord: string;
  @Input() searchArea: string;

  constructor(private _wordsList: WordsListService, public _definitionService: DefinitionService, private modalService: NgbModal) {
    this.defaultPagination = 1;
    this.advancedPagination = 1;
    this.paginationSize = 1;
    this.disabledPagination = 1;
    this.isDisabled = true;
    this.tableSize = 20;
    this.sort = 'ASC'
    this.activeCategory = 'awl';
  }

  resetPagination() {
    this.awlpage = 1;
    this.hipage = 1;
    this.medpage = 1;
    this.lowpage = 1;
  }

  updateCategory(category: string) {
      this.activeCategory = category;
      this.searchTrigger = false;
    this.getWordList(0, this.activeCategory, this.tableSize, this.sort);
    this.convertText(this.activeCategory)
  }

  private getWordList(pageNumber: number, category: string, size: number, sort: string): void {
    this.defaultPagination = 1;
    this.sort = sort;
    this._wordsList.getData(pageNumber, category, size, sort)
      .subscribe
      (res => {
        this.page = res;
        this.turnOn = true;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side Error occured');
        } else {
          console.log('Server-side Error occured');
        }
      }
      );
  }

  //Since the page Number starts from 0 in the backend we decrement the PageNumber by 1
  getAWLWordList(pageNumber: number): void {
    this.getWordList(pageNumber - 1, 'awl', this.tableSize, this.sort)
  }

  getSTEMWordList(pageNumber: number): void {
    this.getWordList(pageNumber - 1, 'stem', this.tableSize, this.sort)
  }



  getHIWordList(pageNumber: number): void {
    this.getWordList(pageNumber - 1, 'hi', this.tableSize, this.sort)
  }

  getMedWordList(pageNumber: number): void {
    this.getWordList(pageNumber - 1, 'med', this.tableSize, this.sort)
  }

  getLowWordList(pageNumber: number): void {
    this.getWordList(pageNumber - 1, 'low', this.tableSize, this.sort)
  }

  convertText(category: string) {

      var temp: string;

      if (category === 'awl') {
          temp = 'Academic Word'
    } else if (category == 'stem') {
      temp = 'STEM'
    } else if (category === 'hi') {
        temp = 'High Frequency'
    } else if (category === 'med') {
        temp = 'Medium Frequency'
    } else if (category === 'low') {
          temp = 'Low Frequency'
    }

      if (this.searchTrigger == true) {
          return this.resultCategory = temp;
      } else if (this.searchTrigger == false) {
          return this.wordCategory = temp;
      }//This determines if the user hits 'search' in order to update the view properly
  }

  ngOnInit() {
    this.getWordList(0, this.activeCategory, this.tableSize, this.sort);
      this.convertText(this.activeCategory)
      window.scrollTo(0,0);
  }


  // it gets the definition of  the word using DefinitionService
  getDefinition(word: string) {
    this.processing = true;
    this.error = false;
    this.cleanWord = word.replace(/[^a-zA-Z ]/g, '');
    this._definitionService.getDefinitionService(this.cleanWord)
      .subscribe
      (res => {
        this.wordDefinition = res;
        this.turnOn = true;
        this.processing = false;
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


  // definiton Model open
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  searchWord(): void {
      this.errorSearch = false;
      this.searchTrigger = true;
    this.alertWord = this.searchArea;
    var categories = "awl,hi,stem,med,low";
    this._wordsList.getWord(this.searchArea, categories)
      .subscribe
      (res => {
        this.word = res;
        this.processing = false;
        this.showTable = true;
        this.resultCategory = this.convertText(res.category);
        categories = null;
      },
      (err: HttpErrorResponse) =>
      {
        if (err.error instanceof Error) {
          console.log('Client-side Error occured');
        } else {
          this.errorSearch = true;
          console.log('Server-side Error occured');
        }
        categories = null;
      }
      );
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
}

exportexcel(): void{
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'WordList.xlsx');
}

}
