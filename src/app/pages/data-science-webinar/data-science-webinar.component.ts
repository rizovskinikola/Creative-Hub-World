import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HeaderInfo } from 'src/app/modules/webinar-header/webinar-header.model';
import { LecturerCardInfo, Testemonial } from 'src/app/modules/webinar-container/webinar-container.model';
import { initDataWebinarForm } from './data-science-webinar';

@Component({
  selector: 'app-data-science-webinar',
  templateUrl: './data-science-webinar.component.html',
  styleUrls: ['./data-science-webinar.component.scss']
})
export class DataScienceWebinarComponent implements OnInit {

  headerBackground: string = "linear-gradient(104.92deg, #22304C -0.47%, #410291 97.23%)";
  array_of_header_info: Array<HeaderInfo> = [
    {
      header_title: 'How to power up your business skills with <br> Data Science',
      list_title: 'On this webinar you will learn:'
    }
  ];
  array_of_list: Array<string> =
    [
      'Why  your business might fail if you are not using data',
      'Why data should be included in the strategic plan of any Director/VP/CEO',
      'Why data analyst this is the most “in demand” job',
      'How you can learn it only by committing twice a week for 2 hours'
    ];
  firstListTitle: string = "Learning Data requires:";
  array_of_requirements: Array<string> =
    [
      'Short-term commitment (6-9 months Bootcamp program)',
      'Growth-oriented mindset',
      'Willingness to think strategically',
    ];
  array_of_lecturer_card_info: Array<LecturerCardInfo> = [
    {
      lecturer_name: 'Gorjan Popovski',
      certified_logo: 'assets/webinars/sql-logo.svg',
      certified_text: 'SQL & Python Specialist'

    }
  ];
  lecturerImg: string = "assets/webinars/gorjan.png";
  array_of_skills_list: Array<string> =
    [
      'Data Scientist at Enetra ',
      'Previous experience at the research  institute Jožef Stefan ',
      '3 years of experience in the field.'
    ];
  array_of_testemonial: Array<Testemonial> = [
    {
      testemonial_img: 'assets/webinars/testemonial4.png',
      testemonial_text: '“I did my MBA and I had a problem finding a job, I took the Data Science' +
        ' Bootcamp Program and immediately I got more work offers. At the end I started my ' +
        ' own analytics platform. Best decision ever!”'
    },
    {
      testemonial_img: 'assets/webinars/testemonial5.png',
      testemonial_text: '“I have an IT company and I wanted to develop the analytical data skills for my ' +
        'team. We partnered with Creative Hub and 10 of our employees took part in the DS' +
        'Bootcamp program. Our company grew was by 20% last year and we even incorporated' +
        'new service area using their data skills.”'
    },
    {
      testemonial_img: 'assets/webinars/testemonial6.png',
      testemonial_text: '“I was reluctant to change my career in data science because the regular ' +
        ' bootcamp prices are up to 15k and I have student loans. I came across Creative ' +
        ' Hub Data Science Bootcamp Program and they have 3 types of learning tracks. I ' +
        'took the lowest-priced one but now I upgraded to the Total Transformation ' +
        ' Program. I like the value of international networking that it offers. It’s ' +
        ' important for my growth. “'
    },
  ];
  array_of_benefits: Array<string> =
    [
      'Learn opportunities for work after the Bootcamp;',
      'Meet our dedicated career specialist that will help you get to the next step;',
      'See why Forbes featured this  program;',
      'Take part in the project-based learning approach;',
      'Get confident that you can do this, in less than a year, only with twice a week commitment .'
    ];

  footerBg: string = "linear-gradient(104.92deg, #22304C -0.47%, #410291 97.23%)";
  linkToAcademy: string = "/data-science";
  goToBg: string = "linear-gradient(162.44deg, #FF6B3B 0%, #EF4526 100%)";
  whichAcademy: string = "Go to Data Science Bootcamp Program"
  didYouKnow: string = 'By 2026 there will be <b class="cabin">11.5 million jobs</b> in the Data Science field.  '
  helpText: string = 'We have helped 1000+ beginners to become data scientist through our online live Data Science Bootcamp program.'
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    initDataWebinarForm();
  }

}
