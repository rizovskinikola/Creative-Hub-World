import { style } from '@angular/animations';
import {Component, Input} from '@angular/core';

export interface Question {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.scss']
})
export class QuestionsAndAnswersComponent {
  @Input() questions!: Question[];
  @Input() mainBackground!: string;
  @Input() borderColor!: string;
  @Input() titleColor!: string;
  @Input() questionColor!: string;
  @Input() accordionBg!: string;


  toggleAccordion(elIndex: any): void {
    const accordion = document.getElementById(elIndex);
    accordion?.classList.toggle('active');
    // accordion!.parentElement!.style.background = this.accordionBg ;
    // accordion!.style.color = "#434141" ;

    if (accordion?.nextElementSibling) {
      const panel: any = accordion.nextElementSibling;
      if (panel && panel.style.maxHeight) {
        panel.style.maxHeight = '';
        // accordion!.parentElement!.style.background = "#1d1a42" ;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }
}
