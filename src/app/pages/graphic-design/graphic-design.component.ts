import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { chooseAcademy, chooseInstallments } from '../../modules/calculator/calculator.model';
import { Pricing, PricingHeader } from '../../modules/pricing/pricing.model';
import { Question } from '../../modules/questions-and-answers/questions-and-answers.component';
import { MatDialog } from '@angular/material/dialog';
import { FormtestComponent } from '../formtest/formtest.component';
import { programToggle } from './graphic-design';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent implements OnInit {

  constructor(public dialog: MatDialog, private scroller: ViewportScroller) { }
  goDown1() {
    this.scroller.scrollToAnchor("thisForm");
  }
  goDown2() {
    this.scroller.scrollToAnchor("calendly");
  }

  companiesBg="#000000 ";
  workoutSessionColor: string = '#003577';

  borderBottomCalc: string ="4px solid rgba(93, 160, 239, 1)"
  arrowBg: string="linear-gradient(231.38deg, #5DA0EF 34.17%, #44FF78 119.03%)"
  

  subscribeBorder: string ="linear-gradient(180deg, rgba(93, 160, 239, 1)  0%, rgba(255, 255, 255, 0) 100%)"


  // fbLink: string = '"../https://www.facebook.com/groups/857018105003649/"'
  borderColor: string = 'black';
  mainBackground: string = '#F4F3EC'
  titleColor: string = 'rgba(93, 160, 239, 1)';
  questionColor: string = 'black';
  accordionBg:string ="#F4F3EC";
  questions: Question[] = [{
    question: 'Do I need any previous design or art experience?',
    answer: 'No, you don\'t need any previous art or design experience. In fact, many professional artists and designers started out ' +
      ' by taking our Bootcamp. Our program is designed to be accessible to everyone, regardless of your skill level. So feel ' +
      ' free to start from the beginning and work your way through at your own pace. We promise you\'ll learn a lot along the way!'
  }, {
    question: 'Are the classes pre-recorded?',
    answer: 'No, the classes are live online. However, you will receive a recording after every class so that you can review the material at your convenience.'
  }, {
    question: 'How often can I contact the lecturers if I have a problem with homework?',
    answer: 'All the lecturers are available during work to help you with your homeworks. You can contact them by email, phone or on ' +
      ' Slack and they will do their best to solve the problem as soon as possible. ' +
      ' The Creative Hub team is available to you 24/7 to help you with all that you need. '
  }, {
    question: 'How much does the Bootcamp cost?',
    answer: 'The cost of the Bootcamp will depend on what you want to get out of it. However you can always start for FREE and take our Introductory course. ' +
      ' If you feel that the class was helpful and wish to continue, you have the option of enrolling in Just Bootcamp, CPD '+
      ' Certified, or the Total Transformation Program. The differences are described in greater detail above in the pricing section. '
  }, {
    question: 'Can you tell me more about the Hiring Process?',
    answer: 'Yes, we have a dedicated recruiter who will work with you on the CV and help you through the process. However, one thing ' +
      ' to keep in mind is that companies are looking for students that have great portfolios and finished the bootcamp with excellent results. ' +
      ' Additionally, we have developed a performance-based approach so from the moment you sign up you will receive a list with ' +
      ' all the projects as well as your final capstone project and the dates you need to complete this by. "We do have guaranteed internship/job placement opportunities, but you have to put in hard work as well."'
  }, {
    question: 'What are some of the projects I will be working on?',
    answer: 'After the Bootcamp, you\'ll have completed 20 projects, some of which are as follows: photo manipulation, mock-up scene ' +
      ' creation, photo retouching, book cover design, magazine design, social media design and adverts. corporate identity and brochure layout '
  }, {
    question: 'Will I work on “real projects”?',
    answer: 'We collaborate with more than 150 companies as part of the hiring & learning process, which gives our students creative ' +
      ' tasks to solve. You will have the opportunity to work on 3-5 real projects during the Bootcamp, and add them to your portfolio as a reference.' +
      ' You will also receive company feedback for each one of your projects. Very often, the best design is a starting point for a job opportunity in the partner company. '
  }]


  array_of_pricing_header: Array<PricingHeader> = [
    { pricing_name: 'Bootcamp Only',pricing_classes:160,  pricing_price: 312, pricing_price_full: 3750 },
    { pricing_name: 'Deep Dive',pricing_classes:160,  pricing_price: 416, pricing_price_full: 4999},
    { pricing_name: 'Total Transformation',pricing_classes:160,  pricing_price: 624, pricing_price_full: 7499 },
  ];


  array_of_pricing: Array<Pricing> =
  [  {pricing_name: "Access to all classes", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Creative Hub Certificate", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Hiring Platform Access", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Facebook community", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Event invitation", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Hackathons", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Take part in interconnected teams", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Help with job placement", just_bootcamp:true, cpd_certified:true,total_transformation:true},
    //  {pricing_name: "Photography class (only for Miami-based students)", just_bootcamp:false, cpd_certified:true,total_transformation:true},
     {pricing_name: "+ 20 hours of practical deep dive program", just_bootcamp:false, cpd_certified:true,total_transformation:true},
     {pricing_name: "CPD Certificate", just_bootcamp:false, cpd_certified:true,total_transformation:true},
     {pricing_name: "One-on-one mentoring", just_bootcamp:false, cpd_certified:false,total_transformation:true},
     {pricing_name: "Guaranteed paid internship / Job placement", just_bootcamp:false, cpd_certified:false,total_transformation:true},
     {pricing_name: "8 months workout sessions with trainer", just_bootcamp:false, cpd_certified:false,total_transformation:true},
 ];

 arrayOfInstallments: Array<chooseInstallments> = [
  {month: 'at once'},
  {month: 3},
  {month: 6},
  {month: 12}
];
arrayOfAccademy: Array<chooseAcademy> = [
  {name : "Bootcamp Only $", price: 3750 },
  {name : "Deep Dive $", price: 4999 },
  {name : "Total Transformation $", price: 7499 },
];
array_of_bootcamp: Array<string> =
[
  'Access to all classes',
  'Creative Hub Certificate',
  'Hiring Platform Access',
  'Facebook community',
  'Hackathons',
  'Take part in interconnected teams',
  'Help with job placement',
];
array_of_cpd: Array<string> =
[
  'Access to all classes',
  'Creative Hub Certificate',
  'Hiring Platform Access',
  'Facebook community',
  'Hackathons',
  'Take part in interconnected teams',
  'Help with job placement',
  'Photography class',
  '+ 20 hours of practical deep dive program'
];
array_of_transformation: Array<string> =
[
  'Access to all classes',
  'Creative Hub Certificate',
  'Hiring Platform Access',
  'Facebook community',
  'Hackathons',
  'Take part in interconnected teams',
  'Help with job placement',
  'Photography class',
  '+ 20 hours of practical deep dive program',
  'CPD Certificate',
  'One-on-one mentoring',
  'Guaranteed paid internship / Job placement',
  '8 months workout sessions with trainer',

];
payJustAcademy: string ="https://buy.stripe.com/5kAdR2euie4XbpS8wx";
payTravelAcademy: string ="https://buy.stripe.com/5kAdR2euie4XbpS8wx"; 
payTotalAcademy: string ="https://buy.stripe.com/5kAeV685UaSLctWdQT";

pricingTextBg: string = '#F3EBFF';
from_where: string = 'graphic-design';

studentCarusel: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  autoplay: true,
  navSpeed: 700,
  margin: 8 ,
  responsive: {
    0: {
      items: 1.5
    },
    400: {
      items: 1.5
    },
    740: {
      items: 2
    },
    940: {
      items: 4
    }
  },

}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  autoplay: true,
  navSpeed: 700,
  responsive: {
    0: {
      items: 1.5
    },
    400: {
      items: 1.5
    },
    740: {
      items: 1.5
    },
    940: {
      items: 1
    }
  },

}
ngAfterViewInit() { 
  programToggle();
}
  ngOnInit(): void {
  }
  applyNow(){

    const dialogRef = this.dialog.open(FormtestComponent,{
      data:{
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
}


}



