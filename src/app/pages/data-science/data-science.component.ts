import {Component, OnInit} from '@angular/core';
import { ViewportScroller } from "@angular/common";
import {Question} from "../../modules/questions-and-answers/questions-and-answers.component";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Pricing, PricingHeader } from '../../modules/pricing/pricing.model';
import { chooseAcademy, chooseInstallments } from '../../modules/calculator/calculator.model';

@Component({
  selector: 'app-data-science',
  templateUrl: './data-science.component.html',
  styleUrls: ['./data-science.component.scss'], 
})
export class DataScienceComponent {

  image1 = '../../../assets/data-science/arbnor.png';
  image2 = '../../../assets/data-science/fidan.png';
  image3 = '../../../assets/data-science/instructor.png';
  image4 = '../../../assets/data-science/instructor1.png';
  image5 = '../../../assets/data-science/instructor2.png';
  image6 = '../../../assets/data-science/instructor3.png';
  image7 = '../../../assets/data-science/instructor4.png';
  image8 = '../../../assets/data-science/instructor5.png';
  image9 = '../../../assets/data-science/instructor6.png';
  image10 = '../../../assets/data-science/instructor7.png';
  image11 = '../../../assets/data-science/instructor8.png';
  image12 = '../../../assets/data-science/instructor-girl.png';
  image13 = '../../../assets/data-science/journey-girl.png';
  image14 = '../../../assets/data-science/olti.png';
  image15 = '../../../assets/data-science/portfolio1.png';
  image16 = '../../../assets/data-science/portfolio2.png';
  image17 = '../../../assets/data-science/raspored.svg'
  
  constructor(private scroller: ViewportScroller) {}
  goDown1() {
    this.scroller.scrollToAnchor("thisForm");
  }
  goDown2() {
    this.scroller.scrollToAnchor("calendly");
  }

  from_where:string ="data-science";
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: true,
    navText: ["<div class='arrow'><img src='../../../assets/data-science/left-arrow-data.svg'></div>", "<div class='arrow'><img src='../../../assets/data-science/right-arrow-data.svg'></div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

  }
  secondCustomOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [''],
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
    nav: false
  }

  borderColor: string = 'rgba(29, 26, 66, 1)';
  mainBackground: string = 'rgba(29, 26, 66, 1)'
  titleColor: string = 'rgba(232, 69, 0, 1)';
  questionColor: string = 'white'
  accordionBg: string = 'rgba(29, 26, 66, 1);'

  workoutSessionColor: string = 'rgba(255, 107, 59, 1)';

  subscribeBorder: string ="linear-gradient(180deg, rgba(250, 96, 53, 1)  0%, rgba(255, 255, 255, 0) 100%)"
  arrowBg: string = "linear-gradient(162.44deg, #FF6B3B 0%, #EF4526 100%)"

  borderBottomCalc: string ="4px solid rgba(255, 107, 59, 1)"

  questions: Question[] = [{
    question: 'Do I need any previous data science experience?',
    answer: 'No, you don\'t need any previous data science experience. In fact, many senior data scientists started out by taking our ' +
      ' Bootcamp. Our program is designed to be accessible to everyone, regardless of their skill level. So feel free to start ' +
      ' from the beginning and work your way through at your own pace. We promise you\'ll learn a lot along the way!'
  }, {
    question: 'Are the classes pre-recorded?',
    answer: 'No, the classes are live online. However, you will receive a recording after every class so that you can review the material at your convenience.'
  }, {
    question: 'How often can I contact the lecturers if I have a problem with homework?',
    answer: 'All the lecturers are available during work to help you with your homeworks. You can contact them by email, phone or on ' +
      ' Slack and they will do their best to solve the problem as soon as possible.' +
      'The Creative Hub team is available to you 24/7 to help you with all that you need.'
  }, {
    question: 'How much does the Bootcamp cost?',
    answer: 'The cost of the Bootcamp will depend on what you want to get out of it. However you can always start for FREE and take ' +
      ' our Introductory course. If you feel that the class was helpful and wish to continue, you have the option of enrolling in Just Bootcamp, Deep' +
      'Dive, or the Total Transformation Program. The differences are described in greater detail above in the pricing section.'
  }, {
    question: 'Can you tell me more about the Hiring Process?',
    answer: 'Yes, we have a dedicated recruiter who will work with you on the CV and help you through the process. However, one thing ' +
      'to keep in mind is that companies are looking for students that have great portfolios and finished the bootcamp with excellent results.' +
      'Additionally, we have developed a performance-based approach so from the moment you sign up you will receive a list with ' +
      ' all the projects as well as your final capstone project and the dates you need to complete this by. We do have guaranteed internship/job placement opportunities, but you have to put in hard work as well.'
  }, {
    question: 'What are some of the projects I will be working on?',
    answer: 'The Bootcamp is created in a way that all subjects have individual project but also all together are needed in order to complete the capstone project.' +
      'For example on subjects such as Power BI, you will create KPI Dashboards, Strategic Unemployment Reports etc.'
  }, {
    question: 'Will I work on “real projects”?',
    answer: 'We collaborate with more than 150 companies as part of the Hiring & Learning process. You will have the opportunity to work ' +
      'on 3-5 real projects during the Bootcamp, and add them to your portfolio as a reference. ' +
      'You will also receive company feedback for each one of your projects. Very often, the Learning partner project is a starting point for a job opportunity in the partner company.'
  }]

  array_of_pricing_header: Array<PricingHeader> = [
    { pricing_name: 'Bootcamp ONLY',pricing_classes:152,  pricing_price: 416, pricing_price_full: 4999 },
    { pricing_name: 'DEEP DIVE BOOTCAMP',pricing_classes:152,  pricing_price: 583, pricing_price_full: 6999 },
    { pricing_name: 'Total Transformation',pricing_classes:152,  pricing_price: 833, pricing_price_full: 9999 },
  ]

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
  {month: 5},
  {month: 10},
  {month: 15}
];
arrayOfAccademy: Array<chooseAcademy> = [
  {name : "Just Bootcamp $", price: 11999 },
  {name : "CPD Certified $", price: 13999 },
  {name : "Total transformation $", price: 14999 },
];

array_of_bootcamp: Array<string> =
[
  'Access to all classes',
  'Creative Hub Certificate',
  'Hiring Platform Access',
  'Facebook community',
  'Event invitation',
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
  'Event invitation',
  'Hackathons',
  'Take part in interconnected teams',
  'Help with job placement',
  '+ 20 hours of practical deep dive program',
  'One-on-one mentoring',
  'Guaranteed paid internship / Job placement',
  '8 months workout sessions with trainer',

];

payJustAcademy: string ="https://buy.stripe.com/7sI00cae24un9hK5kq";
payTravelAcademy: string ="https://buy.stripe.com/bIYfZa85U6Cv9hKcMQ"; 
payTotalAcademy: string ="https://buy.stripe.com/bIYfZa85U6Cv9hKcMQ";

  companiesBg: string = '#FFFFFF'
  pricingTextBg: string = '#FFEAB4'
  annualPricingBg: string = 'white';

  levarageColor: string ='white';

}


