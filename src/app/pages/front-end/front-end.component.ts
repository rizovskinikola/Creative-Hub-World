import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { chooseAcademy, chooseInstallments } from '../../modules/calculator/calculator.model';
import { Pricing, PricingHeader } from '../../modules/pricing/pricing.model';
import { Question } from '../../modules/questions-and-answers/questions-and-answers.component';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss']
})
export class FrontEndComponent implements OnInit {

  image1 = 'assets/front-end/creativeHubJs.svg';
  image2 = 'assets/front-end/ideal-academy.svg';
  image3 = '../../../assets/front-end/raspored.svg';
  image4 = '../../../assets/front-end/instructor.png'

  constructor(private scroller: ViewportScroller) { }
  goDown1() {
    this.scroller.scrollToAnchor("thisForm");
  }
  goDown2() {
    this.scroller.scrollToAnchor("calendly");
  }

  array_of_pricing_header: Array<PricingHeader> = [
    { pricing_name: 'Just Bootcamp',pricing_classes:240,  pricing_price: 416, pricing_price_full: 4999 },
    { pricing_name: 'EU Certified',pricing_classes:240,  pricing_price: 583, pricing_price_full: 6999 },
    { pricing_name: 'Total transformation',pricing_classes:240,  pricing_price: 833, pricing_price_full: 9999 },
  ]

  companiesBg="#000000 ";
  from_where:string ="front-end";
  mainBackground: string = '#F4F3EC'
  titleColor: string = 'rgba(93, 160, 239, 1)';
  questionColor: string = 'black';
  accordionBg:string ="#F4F3EC";
  workoutSessionColor: string = '#6FE9FF';

  borderBottomCalc: string ="4px solid rgba(81, 98, 255, 1)"
  arrowBg: string = "linear-gradient(162.44deg, #5162FF 0%, #778DFF 100%)"

  subscribeBorder: string ="linear-gradient(180deg, rgba(93, 160, 239, 1)  0%, rgba(255, 255, 255, 0) 100%)"
  questions: Question[] = [{
    question: 'Do I need any previous programming experience?',
    answer: 'No, you don\'t need any previous programming experience. In fact, many senior front-end developers started out by taking our' +
      'Bootcamp. Our program is designed to be accessible to everyone, regardless of their skill level. So feel free to start' +
      'from the beginning and work your way through at your own pace. We promise you\'ll learn a lot along the way!'
  }, {
    question: 'Are the classes pre-recorded?',
    answer: 'No, the classes are live online. However, you will receive a recording after every class so that you can review the material at your convenience.'
  }, {
    question: 'How often can I contact the lecturers if I have a problem with homework?',
    answer: 'All the lecturers are available during work to help you with your homeworks. You can contact them by email, phone or on ' +
      ' Slack and they will do their best to solve the problem as soon as possible.' +
      ' The Creative Hub team is available to you 24/7 to help you with all that you need.'
  }, {
    question: 'How much does the Bootcamp cost?',
    answer: 'The cost of the Bootcamp will depend on what you want to get out of it. However you can always start for FREE and take ' +
      ' our Introductory course. If you feel that the class was helpful and wish to continue, you have the option of enrolling in Just Bootcamp, Deep ' +
      ' Dive, or the Total Transformation Program. The differences are described in greater detail above in the pricing section.'
  }, {
    question: 'Can you tell me more about the Hiring Process?',
    answer: 'Yes, we have a dedicated recruiter who will work with you on the CV and help you through the process. However, one thing ' +
      ' to keep in mind is that companies are looking for students that have great portfolios and finished the bootcamp with excellent results.' +
      ' Additionally, we have developed a performance-based approach so from the moment you sign up you will receive a list with' +
      ' all the projects as well as your final capstone project and the dates you need to complete this by. "We do have guaranteed internship/job placement opportunities, but you have to put in hard work as well."'
  }, {
    question: 'Will I work on “real projects”?',
    answer: 'We collaborate with more than 150 companies as part of the hiring & learning process, which gives our students creative' +
      'tasks to solve. You will have the opportunity to work on 3 real projects during the Bootcamp, and add them to your portfolio as a reference.' +
      'You will also receive company feedback for each one of your projects. Very often, the best written code is a starting point for a job opportunity in the partner company.'
  }]

  array_of_pricing: Array<Pricing> =
  [  {pricing_name: "Access to all classes", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Creative Hub Certificate", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Hiring Platform Access", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Facebook community", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Event invitation", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Hackathons", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Take part in interconnected teams", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "Help with job placement", just_bootcamp:true, cpd_certified:true,total_transformation:true},
     {pricing_name: "+ 20 hours of practical deep dive program", just_bootcamp:false, cpd_certified:true,total_transformation:true},
     {pricing_name: "One-on-one mentoring", just_bootcamp:false, cpd_certified:true,total_transformation:true},
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
  {name : "Just Bootcamp $", price: 4999 },
  {name : "Deep Dive Bootcamp $", price: 6999 },
  {name : "Total transformation $", price: 9999 },
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
  '+ 20 hours of practical deep dive program',
  'One-on-one mentoring',
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
  '+ 20 hours of practical deep dive program',
  'CPD Certificate',
  'One-on-one mentoring',
  'Guaranteed paid internship / Job placement',
  '8 months workout sessions with trainer',

];
payJustAcademy: string ="https://buy.stripe.com/00g7sE3PE7Gz65yaEL";
payTravelAcademy: string ="https://buy.stripe.com/28o6oA71Q7Gz65y14f"; 
payTotalAcademy: string ="https://buy.stripe.com/8wMcMY1Hwe4X1PibIU";

  ngOnInit(): void {
  }
  lecturerName: string = "<lecturer_name>"
  break: string = "<break>"
  shortBio: string = "<short_bio>"
  pricingTextBg: string = 'rgba(230, 251, 255, 1)'
  annualPricingBg: string = 'black';
}
