import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HeaderInfo } from 'src/app/modules/webinar-header/webinar-header.model';
import { LecturerCardInfo, Testemonial } from 'src/app/modules/webinar-container/webinar-container.model';
import { initGraphicWebinarForm } from './graphic-design-webinar';

@Component({
  selector: 'app-graphic-design-webinar',
  templateUrl: './graphic-design-webinar.component.html',
  styleUrls: ['./graphic-design-webinar.component.scss']
})
export class GraphicDesignWebinarComponent implements OnInit {

  headerBackground: string = "linear-gradient(232.96deg, #2173D2 55.39%, #44FF78 172.26%)";
  array_of_header_info: Array<HeaderInfo> = [
    {
      header_title: 'How to start a career in GRAPHIC design?',
      list_title: 'This webinar is for you if you:'
    },
  ];
  array_of_list: Array<string> =
    [
      'Feel you are in the wrong career ',
      'Are ready to change your career',
      'Want to take a virtual program that will work with your schedule'
    ];
    firstListTitle: string = "benefits of attending the webinar";
    array_of_requirements: Array<string> =
    [
      'See how easy of a job it can be ',
      'Learn how to design your first logo',
      'Learn about career opportunities',
      'Get to know more like-minded people'
    ];
  lecturerImg: string = "assets/webinars/maya.png";
  array_of_lecturer_card_info: Array<LecturerCardInfo> = [
    {
      lecturer_name: 'Maya',
      certified_logo: 'assets/webinars/adobe-logo.svg',
      certified_text: 'Certified Instructor'
    }
  ];
  array_of_skills_list: Array<string> =
    [
      'Adobe Certified Lecturer for Adobe Photoshop, InDesign & Illustrator.',
      '15+ years of experience.',
      'Adobe Certified Expert.'
    ];
  array_of_testemonial: Array<Testemonial> = [
    {
      testemonial_img: 'assets/webinars/testemonial1.png',
      testemonial_text: '“During the pandemic I lost my job and I had to start a new career.' +
        ' Graphic Design has always been interesting to me, I signed up for the Creative Hub Graphic Design Bootcamp program(because it only requires my commitment twice a week and is the most cost - effective compared to others in Florida) ' +
        ' and I got hired 1 month after finishing.” - <b class="cabin">Melissa</b> '
    },
    {
      testemonial_img: 'assets/webinars/testemonial2.png',
      testemonial_text: '“I was not sure what I wanted to do after high school, but I knew I didn’t want a 9-5 job. ' +
        'I chose the Graphic Design Bootcamp because of the short learning commitment and because it was the best price compared to others. ' +
        ' Now I actually earn more by selling my logos and I also make my own schedule. I feel like my own BOSS!” <br> - <b class="cabin">Arianna</b>'
    },
    {
      testemonial_img: 'assets/webinars/testemonial3.png',
      testemonial_text: '“I already worked as a junior graphic designer in an Agency, but I wanted to' +
        ' grow more and be Art Director. I was doing research online and I came across the ' +
        'Creative Hub Website. I also checked their mentors and heard a lot of positive' +
        'feedback and real stories from people that managed to upgrade in a short time. I' +
        'chose the Total Transformation Program and I am so excited that in 9 months I' +
        'will get to travel to Europe and network with designers.“ <br>' +
        ' - <b class="cabin">Jake</b>'
    },
  ];
  array_of_benefits: Array<string> =
    [
      'Learn opportunities for work after the Bootcamp',
      'Meet our dedicated career specialist that will help you get to the next step',
      'See why Forbes featured this  program',
      'Take part in the project-based learning approach and start designing today',
      'Get confident that you can do this, in less than 6 months, only with twice a week commitment.'
    ];
  footerBg: string = "linear-gradient(232.96deg, #2173D2 55.39%, #44FF78 172.26%)";
  linkToAcademy: string = "/graphic-design";
  goToBg: string = "#FFFFFF";
  goToColor: string = "#2B2B2B"
  goToBorder: string = '2px solid #2B2B2B'
  whichAcademy: string = "Go to Graphic Design Bootcamp Program"
  didYouKnow: string = 'There are <b class="cabin">23,900 openings</b> in Graphic Design every year <br> according to the U.S. Bureau of Labor Statistics'
  helpText: string = 'We have helped 1000+ beginners to become designers through our online live Graphic Design Bootcamp program.'
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    initGraphicWebinarForm();
  }
}

