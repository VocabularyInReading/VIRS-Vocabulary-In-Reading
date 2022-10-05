import { Component, OnInit } from '@angular/core';
import { TextService, IText } from '../../shared'
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-text-statistics',
  templateUrl: './text-statistics.component.html',
  styleUrls: ['./text-statistics.component.scss']
})
export class TextStatisticsComponent implements OnInit {

  public static BACK_LABEL = ' Back';
  public static readonly ENHANCETEXT_LABEL: string = ' Enhanced Text';

  public pieChartLabels: string[] = ['Stem Word', 'Academic Word', 'Other High Freq.', 'Medium Freq.', 'Low Freq.', 'Names & Off-List', 'K1', 'K2'];
  public pieChartData: number[]; //number[];
  public pieChartType = 'pie';

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Stem Word', 'Academic Word', 'Other High Freq.', 'Medium Freq.', 'Low Freq.', 'Off-List', 'K1', 'K2'];
  public barChartData: any[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public lineChartColors:Array<any> = [
    { // all colors in order
    backgroundColor: ['darkorchid', 'gold', 'blue', 'red','green', 'black', 'pink', 'orange']
    }

    ];




  text: IText;
  showDiv: boolean;
  textLVL: string;
  textColor: string;
  showOnlyIcons: boolean;
  backLabel: string = TextStatisticsComponent.BACK_LABEL;
  enhanceTextLabel: string = TextStatisticsComponent.ENHANCETEXT_LABEL;

  stemPercentage: number;
  awlPercentage: number;
  hiPercentage: number;
  medPercentage: number;
  lowPercentage: number;
  k1Percentage: number;
  k2Percentage: number;
  noCategoryPercentage: number;

  closeResult: string;

  email: string;
  emailRecovery: string;
  emailRecoveryByEmail: string;
  constructor(private _textService: TextService, public router: Router, private _location: Location, private modal: NgbModal) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.text = this._textService.resultText;
    if (!this.text) {
      return;
    } else {
      this.textLevel(this.text.fleschReadingScore, this.text.words.length);
    }
    this.showDiv = true;
    this.showOnlyIcons = window.innerWidth <= 680;
    this.updaTeLabels();
    if (!this.text) {
      return;
    } else {
      this.updateBarChart(this.text.statistics.wordCount.stem, this.text.statistics.wordCount.awl, this.text.statistics.wordCount.hi,
        this.text.statistics.wordCount.med, this.text.statistics.wordCount.low, this.text.statistics.wordCount.noCategory, this.text.statistics.wordCount.k1, this.text.statistics.wordCount.k2);
      this.updatePieChart(this.text.statistics.wordPercentage.stem, this.text.statistics.wordPercentage.awl, this.text.statistics.wordPercentage.hi,
        this.text.statistics.wordPercentage.med, this.text.statistics.wordPercentage.low, this.text.statistics.wordPercentage.noCategory, this.text.statistics.wordPercentage.k1, this.text.statistics.wordPercentage.k2);
    }
  }

  /*
    80-100: Beginner Lever
    70-79: Intermediate Level
    60-69: Upper intermediate Level
    30-59: Advanced Level
    0--29: College Level
  */
  textLevel(score: number, words: number) {
    if (score <= 29 && score >= 1) {
      this.textLVL = 'College Level';
      this.textColor = 'red';
    } else if (score <= 59 && score >= 30) {
      this.textLVL = 'Advanced Level';
      this.textColor = 'orange';
    } else if (score <= 69 && score >= 60) {
      this.textLVL = 'Upper intermediate Level';
      this.textColor = 'yellow';
    } else if (score <= 79 && score >= 70) {
      this.textLVL = 'Intermediate Level';
      this.textColor = 'green';
    } else if (score === 0) {
      if (words < 100) {
        this.textLVL = 'it is not applicable for texts under 100 words.'
      } else if (words > 100) {
        this.textLVL = 'impossible to comprehend. (more sentences needed)'
      }
    } else {
      this.textLVL = 'Beginner Level';
      this.textColor = 'blue';
    }
  }

  backClicked() {
    this._location.back();
  }

  onResize(event) {
    this.showOnlyIcons = window.innerWidth <= 680;
    this.updaTeLabels();
    event.target.innerWidth;
  }

  private updaTeLabels(): void {
    this.backLabel = this.showOnlyIcons ? '' : TextStatisticsComponent.BACK_LABEL;
    this.enhanceTextLabel = this.showOnlyIcons ? '' : TextStatisticsComponent.ENHANCETEXT_LABEL;
  }

  // events for Pie Chart
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // Update Pie chart
  updateBarChart(stem:number, awl: number, hi: number, med: number, low: number, noCategory: number, K1:number, K2:number ) {

    this.barChartData = [
      { data: [stem, awl, hi, med, low, noCategory, K1, K2], label: '# of Words in different Category' },
    ];
  }
  updatePieChart(stem:number, awl: number, hi: number, med: number, low: number, noCategory: number, K1: number, K2: number) {
    this.pieChartData = [stem*100, awl * 100, hi * 100, med * 100, low * 100, noCategory * 100, K1 * 100, K2 * 100]
  }

  open(content) {
    console.log('opened');
    this.modal.open(content).result.then((result) => {
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
}


