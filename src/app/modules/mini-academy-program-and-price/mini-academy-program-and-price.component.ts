import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-mini-academy-program-and-price',
  templateUrl: './mini-academy-program-and-price.component.html',
  styleUrls: ['./mini-academy-program-and-price.component.scss']
})
export class MiniAcademyProgramAndPriceComponent implements OnInit {

  @Input() array_of_program!: Array<string>;
  @Input() programParagraph!: string;
  @Input() array_of_price_includes!: Array<string>;
  @Input() certificateText!: string;
  @Input() certificateImage!: string;
  @Input() mentorImg!: string;
  @Input() mentorName!: string;
  @Input() mentorSkillsImg!: string;
  @Input() array_of_mentor_skills!: Array<string>;
  @Input() firstDate!: string; 
  @Input() secondDate!: string;
  @Input() thirdDate!: string;

  constructor() {}

  ngOnInit(): void { 
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
}
