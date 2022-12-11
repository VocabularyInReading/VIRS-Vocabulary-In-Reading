import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TextService, IText, IWordMatch, IDefinition, DefinitionService } from '../../shared'
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-enhanced-text-result',
  templateUrl: './enhanced-text-result.component.html',
  styleUrls: ['./enhanced-text-result.component.scss']
})
export class EnhancedTextResultComponent implements OnInit {

  public static BACK_LABEL: string = ' Back';
  public static readonly STATISTICS_LABEL: string = ' Statistics';


  processing: boolean;
  wordDefinition: IDefinition;
  text: IText;
  error: boolean;
  showOnlyIcons: boolean;
  backLabel: string = EnhancedTextResultComponent.BACK_LABEL;
  statisticsLabel: string = EnhancedTextResultComponent.STATISTICS_LABEL;
  cleanWord: string;
  closeResult: string;
  category: string;
  wordCategory: string;
  categoryDescription: string;
  totalWords: IWordMatch[];
  pageOfWords: IWordMatch[];
  pageSize: number = 1000;
  lowerBound: number;
  upperBound: number = 0;
  numberOfTotalWords: number;


  // tslint:disable-next-line:max-line-length
  constructor(private _textService: TextService, public _definitionService: DefinitionService, public router: Router, private _location: Location,
    private modalService: NgbModal) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.showOnlyIcons = window.innerWidth <= 680;
    this.updaTeLabels();
    this.text = this._textService.resultText;
    this.numberOfTotalWords = this.text.words.length;
    this.addPage();
    this.getDefinition('book')
  }

  /**
  * adds 1000 or less words to the words displayed on the page.
  */
  addPage() {
    if (this.upperBound < this.numberOfTotalWords) {
        this.lowerBound = this.upperBound;
        if ((this.upperBound + this.pageSize) < this.numberOfTotalWords) {
            this.upperBound = this.upperBound + this.pageSize;
        } else {
            this.upperBound = this.numberOfTotalWords;
        }
        this.pageOfWords = this.text.words.slice(this.lowerBound, this.upperBound);
        if (this.totalWords == null) {
            this.totalWords = this.pageOfWords;
        } else {
            this.totalWords = this.totalWords.concat(this.pageOfWords);
        }
    }
  }

  /**
  * This is called whenever the page is scrolled down.
  */
  onScrollDown() {
    console.log('On Scroll Called');
    this.addPage();
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


  // return to the previous page
  backClicked() {
    this._location.back();
  }

  onResize(event) {
    this.showOnlyIcons = window.innerWidth <= 680;
    this.updaTeLabels();
    event.target.innerWidth;
  }


  private updaTeLabels(): void {
    this.backLabel = this.showOnlyIcons ? '' : EnhancedTextResultComponent.BACK_LABEL;
    this.statisticsLabel = this.showOnlyIcons ? '' : EnhancedTextResultComponent.STATISTICS_LABEL;
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

  //Convert the active category name "hi,med,low,..." to "High Frequency,.." used for popup title.
  //Sets up the category descriptions.
  activeCategory(cat: string) {
      this.category = cat;
      // tslint:disable-next-line:max-line-length
      this.wordCategory = ( cat === 'awl')  ? 'Academic' 
                        : ( cat === 'stem') ? 'STEM'
                        : ( cat === 'hi')   ? 'Other High Frequency'
                        : ( cat === 'med')  ? 'Medium Frequency'
                        : ( cat === 'low')  ? 'Low Frequency'
                        : ( cat === 'K1')   ? 'K1'
                        : ( cat === 'K2')   ? 'K2'
                        : ( cat === 'K3')   ? 'K3'
                        :                     'Names & Off-Lists';
      this.categoryDescription = ( cat === 'awl')   ? 'Commonly occurring among a wide variety of academic subjects but not within the 2000 most frequent words '
                               : ( cat === 'stem')  ? 'Words occurring in Math or Science texts but not within the 2000 most frequent words'
                               : ( cat === 'hi')    ? 'Words more than 100 times per 10 million words but not within the 3000 most commonly used words'
                               : ( cat === 'med')   ? 'Moderately occurring words, occurring between 10 to 100 times per 10 million words'
                               : ( cat === 'low')   ? 'Rarely occurring words, occurring only 1 to 10 times per 10 million words'
                               : ( cat === 'K1')    ? 'Among the list of the 1000 most frequently used words in primary and secondary texts'
                               : ( cat === 'K2')    ? 'Among the list of the 2nd 1000 most frequently used words in primary and secondary texts'
                               : ( cat === 'K3')    ? 'Among the list of the 3rd 1000 most frequently used words in primary and secondary texts'
                               :                      'These are words that are names or are not analyzed by us';
  }

  //Convert the active category name "hi,med,low,..." to "High Frequency,.." used for popUps when hovering over words
  popUpCategory(cat: string){

    return                ( cat === 'awl')  ? 'Academic' 
                        : ( cat === 'stem') ? 'STEM'
                        : ( cat === 'hi')   ? 'Other High Frequency'
                        : ( cat === 'med')  ? 'Medium Frequency'
                        : ( cat === 'low')  ? 'Low Frequency'
                        : ( cat === 'K1')   ? 'K1'
                        : ( cat === 'K2')   ? 'K2'
                        : ( cat === 'K3')   ? 'K3'
                        :                     'Names & Off-Lists';



  }


}
