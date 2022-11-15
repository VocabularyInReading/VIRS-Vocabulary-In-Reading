import { Observable } from 'rxjs/Observable';
import { Component, ElementRef, Input, NgModule, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DefinitionService } from '../../shared'
import { Router } from '@angular/router';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IWord, IText, IDefinition, IPage, WordsListService } from '../../shared'
import * as XLSX from 'xlsx';
import { getErrorLogger } from '@angular/core/src/errors';

@Component({
  selector: 'app-search-words',
  templateUrl: './search-words.component.html',
  styleUrls: ['./search-words.component.scss'],
  providers: [NgbPaginationConfig],
})
export class SearchWordsComponent implements OnInit {
  page: IPage;
  @ViewChild('searchItem') searchItem: ElementRef;
  turnOn: boolean;

  k1page = 1; k2page = 1; k3page = 1;
  bawpage = 1; awlpage = 1; stempage = 1;
  hipage = 1; medpage = 1; lowpage = 1;

  defaultPagination: number;
  advancedPagination: number;
  paginationSize: number;
  disabledPagination: number;
  isDisabled: boolean;
  tableSize: number;
  k1: number; k2: number; k3: number; hi: number; med: number; low: number; awl: number; stem: number; baw: number;
  //gradeK: number; grade1: number; grade2: number; grade3: number; grade4: number; grade5: number; grade6: number; 
  //grade7: number; grade8: number; grade9: number; grade10: number; grade11: number; grade12: number;
  perma: 0;
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
    this.activeCategory = 'k1';
    this.wordCategory = 'K1';
    this.k1 = 1;

  }

  popUpCategory(cat: string) {

    return (cat === 'awl')  ? 'Commonly occurring among a wide variety of academic subjects but not within the 2000 most frequent words'
         : (cat === 'stem') ? 'Words occurring in Math or Science texts but not within the 2000 most frequent words'
         : (cat === 'hi')   ? 'Words more than 100 times per 10 million words but not within the 3000 most commonly used words'
         : (cat === 'med')  ? 'Moderately occurring words, occurring between 10 to 100 times per 10 million words'
         : (cat === 'low')  ? 'Rarely occurring words, occurring only 1 to 10 times per 10 million words'
         : (cat === 'K1')   ? 'Among the list of the 1000 most frequently used words in primary and secondary texts'
         : (cat === 'K2')   ? 'Among the list of the 2nd 1000 most frequency used words in primary and secondary texts'
         : (cat === 'K3')   ? 'Among the list of the 3rd 1000 most frequency used words in primary and secondary texts'
         : (cat === 'baw')  ? 'These are academic words that are simpler'
         : 'These are words that are names or are not analyzed by us';

  }

  resetPagination() {
    this.k1page = 1;
    this.k2page = 1;
    this.k3page = 1;
    this.bawpage = 1;
    this.awlpage = 1;
    this.stempage = 1;
    this.hipage = 1;
    this.medpage = 1;
    this.lowpage = 1;

  }

  checkCatStatus(category: string) {

    if (this[category])
      return "✓";

  }

  /*checkGradeStatus(grade: string){

    if(this[grade])
      return "✓";

  }*/


  updateCategory(category: string) {

    this.k1 = 0; this.k2 = 0; this.k3 = 0;
    this.hi = 0; this.med = 0; this.low = 0;
    this.awl = 0; this.stem = 0; this.baw = 0;
    this[category] = 1;
    this.activeCategory = category;
    this.searchTrigger = false;
    //this.getWordList(0, this.activeCategory, this.tableSize, this.sort);
    this.getLiveWordList(0, this.activeCategory, this.tableSize, this.sort);
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

  private getLiveWordList(pageNumber: number = 0, category: string, size: number, sort: string, value: string = this.searchItem.nativeElement.value): void {
    console.log(`inside livewords method. category is:  ${category}`);
    this.sort = sort;
    this._wordsList.getLiveWordList(pageNumber, category, size, sort, value)
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

  // Since the page Number starts from 0 in the backend we decrement the PageNumber by 1
  getK1WordList(pageNumber: number): void {
    //this.getWordList(pageNumber - 1, 'k1', this.tableSize, this.sort)
    this.getLiveWordList(pageNumber - 1, 'k1', this.tableSize, this.sort, this.searchItem.nativeElement.value);
  }

  getK2WordList(pageNumber: number): void {
    //this.getWordList(pageNumber - 1, 'k2', this.tableSize, this.sort)
    this.getLiveWordList(pageNumber - 1, 'k2', this.tableSize, this.sort, this.searchItem.nativeElement.value);
  }

  getK3WordList(pageNumber: number): void {
    //this.getWordList(pageNumber - 1, 'k3', this.tableSize, this.sort)
    this.getLiveWordList(pageNumber - 1, 'k3', this.tableSize, this.sort, this.searchItem.nativeElement.value);
  }

  getBAWWordList(pageNumber: number): void {
    //this.getWordList(pageNumber - 1, 'baw', this.tableSize, this.sort)
    this.getLiveWordList(pageNumber - 1, 'baw', this.tableSize, this.sort, this.searchItem.nativeElement.value);
  }

  getAWLWordList(pageNumber: number): void {
    //this.getWordList(pageNumber - 1, 'awl', this.tableSize, this.sort)
    this.getLiveWordList(pageNumber - 1, 'awl', this.tableSize, this.sort, this.searchItem.nativeElement.value);
  }

  getSTEMWordList(pageNumber: number): void {
    //this.getWordList(pageNumber - 1, 'stem', this.tableSize, this.sort)
    this.getLiveWordList(pageNumber - 1, 'stem', this.tableSize, this.sort, this.searchItem.nativeElement.value);
  }

  getHIWordList(pageNumber: number): void {
    //this.getWordList(pageNumber - 1, 'hi', this.tableSize, this.sort)
    this.getLiveWordList(pageNumber - 1, 'hi', this.tableSize, this.sort, this.searchItem.nativeElement.value);
  }

  getMEDWordList(pageNumber: number): void {
    //this.getWordList(pageNumber - 1, 'med', this.tableSize, this.sort)
    this.getLiveWordList(pageNumber - 1, 'med', this.tableSize, this.sort, this.searchItem.nativeElement.value);
  }

  getLOWWordList(pageNumber: number): void {
    //this.getWordList(pageNumber - 1, 'low', this.tableSize, this.sort)
    this.getLiveWordList(pageNumber - 1, 'low', this.tableSize, this.sort, this.searchItem.nativeElement.value);
  }


  convertText(category: string) {
    var temp: string;

    temp = (category === 'k1')   ? 'K1'
         : (category === 'k2')   ? 'K2'
         : (category === 'k3')   ? 'K3'
         : (category === 'baw')  ? 'Basic Academic Words'
         : (category === 'awl')  ? 'Academic Words'
         : (category === 'stem') ? 'STEM'
         : (category === 'hi')   ? 'Other High Frequency'
         : (category === 'med')  ? 'Medium Frequency'
         : (category === 'low')  ? 'Low Frequency'
         : category;

    if (this.searchTrigger == true) {
      return this.resultCategory = temp;
    } else if (this.searchTrigger == false) {
      return this.wordCategory = temp;
    }//This determines if the user hits 'search' in order to update the view properly
  }

  ngOnInit() {
    this.getWordList(0, this.activeCategory, this.tableSize, this.sort);
    this.convertText(this.activeCategory)
    window.scrollTo(0, 0);
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


  searchWord(sortOrder: string = this.sort): void {
    this.errorSearch = false;
    this.searchTrigger = true;
    this.alertWord = this.searchArea;
    var categories = "K1,K2,K3,baw,awl,stem,hi,med,low";

    this.getLiveWordList(0, this.activeCategory, this.tableSize, sortOrder, this.searchItem.nativeElement.value);

    this._wordsList.getWord(this.searchArea, categories)
      .subscribe
      (res => {
        this.word = res;
        this.processing = false;
        this.showTable = true;
        this.resultCategory = this.convertText(res.category);
        categories = null;
      },
        (err: HttpErrorResponse) => {
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

  copyMessage(val: string) {
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

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'WordList.xlsx');
  }

}
