import { Component, OnInit, Input, NgModule } from '@angular/core';
import { IWord, AdminService } from '../../shared'
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  currentJustify = 'start';
  processing = false;
  error = false;
  errorAdd = false;
  word: IWord;
  showTable = false;
  csvFile: any;

  @Input() searchArea: string;
  @Input() wordArea: string;
  @Input() idArea: number;

  addWordMessage: string;
  editWordMessage: string;
  deleteWordMessage: string;
  alertWord: string;
  deleteCategory: string;

  categoryItems: string[] = ['Category...', 'awl','stem', 'hi', 'med', 'low', 'K1', 'K2', 'K3', 'baw'];
  category: string = this.categoryItems[0];

  bulkCategory: string = this.categoryItems[0];

  sessionHistory: string[] = [];
  index = 1;

  constructor(private _admin: AdminService, public router: Router) { }

  // search the word in database
  searchWord(): void {
    this.processing = true;
    this.error = false;
    this.errorAdd = false;
    this.alertWord = this.searchArea;
    this._admin.getWord(this.searchArea)
      .subscribe
      (res => {
        this.word = res;
        this.processing = false;
        this.showTable = true;
        
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

  // Add new word to data base
  addWord(wordArea:string, category:string): void {
    console.log('in addword')
    this.processing = true;
    this.error = false;
    this.errorAdd = false;
    this._admin.postWord(wordArea, category)
      .subscribe
      (res => {
        this.processing = false;
        this.sessionHistory[this.index] = wordArea + ' is added to ' + category + ' category.'
        this.index++;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side Error occured');
        } else {
          this.errorAdd = true;
          this.processing = false;
          console.log('Server-side Error occured');
        }
      }
      );
  }


  // Add new word to data base
  editWord(): void {
    this.processing = true;
    this.error = false;
    this.errorAdd = false;
    this._admin.putWord(this.wordArea, this.category, this.idArea)
      .subscribe
      (res => {
        this.processing = false;
        this.sessionHistory[this.index] = 'Word ID: ' + this.idArea + ' was edited to ' + this.wordArea;
        this.index++;
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

  // Delete the word in database
  deleteWord(): void {
    this.processing = true;
    this.error = false;
    this.errorAdd = false;
    this._admin.deleteWord(this.wordArea)
      .subscribe
      (res => {
        this.processing = false;
        this.sessionHistory[this.index] = this.wordArea + ' was succesfully erased from database.'
        this.index++;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side Error occured');
        } else {
          // this.error = true;
          this.processing = false;
          console.log('Server-side Error occured');
        }
      }
      );
  }

  fileUploadListener($event:any):void{
    
    console.log('starting to add csv');
    //bind $event.target to csv here? then use that binding to call whichever function is needed
    this.csvFile = $event.target;
    //this.csvadd($event.target, this.addWord.bind(this), this._admin, this.processing, this.sessionHistory, this.index, this.errorAdd, this.categoryItems);
    console.log('out of it');
    
   }

csvaddCaller(): void {
  console.log('in csvaddCaller');
  this.csvadd(this.csvFile, this.addWord.bind(this), this._admin, this.processing, this.sessionHistory, this.index, this.errorAdd, this.categoryItems);
}

csvCategoryUpdate(bulkCategory: string): void {
  this.processing = true;
  this.deleteCategory = bulkCategory;
  this._admin.deleteAllInCategory(this.deleteCategory)
    .subscribe
        (res => {
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
    this.csvCategoryUpdateHelper();
  

}

csvCategoryUpdateHelper(): void {

  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < 5000);
  
  this.csvaddCaller();
  
}


  
csvadd(csv: any,  callback, _admin, processing, sessionHistory, index, errorAdd, categoryItems ):void { 
    console.log('in csvadd')
    var file:File = csv.files[0];
    var self = this;
    var reader:FileReader = new FileReader();
    var wordArea:string;
    var category:string;
    var array;
    var fields;
    this.processing = true;
    this.error = false;
    this.errorAdd = false;

    console.log('here 2')
 
    reader.readAsText(file);
    
     reader.onloadend =(e)=> {
      var csvData = reader.result;
      console.log(csvData);
      
      fields = csvData.split('\n'); 

      category = this.bulkCategory;

      fields.forEach(function(element){
        
        console.log('in loop'); 
        var array = element.split(',');
        console.log('HEY YOU');
        console.log(element);
        wordArea=array[0];
        //console.log(wordArea);
        //console.log(categoryItems[1]);
        wordArea=element.replace(/[^a-zA-Z 0-9]/g, "");
        console.log('stripped:');
        console.log(wordArea);
       
      if(wordArea!='' && wordArea!=' ')
      {

        console.log(wordArea);
        //category = 'K1';
        console.log(category);
        //console.log(array[1]);
        console.log(element);
          _admin.postWord(element, category)
        .subscribe 
        (res => {
          processing = false;
          sessionHistory[index] = element + ' is added to ' + category + ' category.'
          index++;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side Error occured');
          } else {
            errorAdd = true;
            processing = false;
            console.log('Server-side Error occured');
          }
        }
        );
      }
      
      }
    
    ,
    reader.onerror = function () {
             console.log('Unable to read ' + file);
         })
  }}

  ngOnInit() {
  }

}
