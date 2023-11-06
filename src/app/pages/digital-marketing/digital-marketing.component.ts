import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Question } from "../../modules/questions-and-answers/questions-and-answers.component";
import { Pricing, PricingHeader } from '../../modules/pricing/pricing.model';
import { ViewEncapsulation } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';



@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class DigitalMarketingComponent implements OnInit {

  constructor(
    private scroller: ViewportScroller) { }

  // result = Array<any>(document.getElementsByClassName("mat-tab-label"))
  //  tabs() {
  //   this.scroller.scrollToAnchor("tabs");

  // } 


    ngOnInit(): void {
      const tabs = () => {
        this.scroller.scrollToAnchor("tabs");
      }
      window.addEventListener('load', function () {
      const result = document.getElementsByClassName("mat-tab-label")
      // result.forEach(tab => {
      //   tab.addEventListener("click", tabs)
      // });
      result[0].addEventListener("click", tabs)
      result[1].addEventListener("click", tabs)
      result[2].addEventListener("click", tabs)
    })

    }



  subscribeBorder: string = "linear-gradient(180deg, rgba(255, 189, 17, 1) 0%, rgba(255, 255, 255, 0) 100%)"
  arrowBg: string = "linear-gradient(223.57deg, #EF5DA8 46.58%, #FFDA44 110.23%)"

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    margin: 29,
    nav: false,
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
        items: 3
      }
    },

  }

  from_where: string = "digital-marketing";
  array_of_pricing_header: Array<PricingHeader> = [
    { pricing_name: 'Just Course', pricing_classes: 152, pricing_price: 5999, pricing_price_full: 2000 },
    { pricing_name: 'Travel & Network', pricing_classes: 152, pricing_price: 7999, pricing_price_full: 2666 },
    { pricing_name: 'Total Transformation', pricing_classes: 152, pricing_price: 9999, pricing_price_full: 3333 },
  ]

  array_of_pricing: Array<Pricing> =
    [{ pricing_name: "12 weeks program", just_bootcamp: true, cpd_certified: true, total_transformation: true },
    { pricing_name: "Creative Hub Certificate", just_bootcamp: true, cpd_certified: true, total_transformation: true },
    { pricing_name: "Practical Projects", just_bootcamp: true, cpd_certified: true, total_transformation: true },
    { pricing_name: "Assignments", just_bootcamp: true, cpd_certified: true, total_transformation: true },
    { pricing_name: "Individual Mentor Feedbacks on your Homework", just_bootcamp: true, cpd_certified: true, total_transformation: true },
    { pricing_name: "Slack Group", just_bootcamp: true, cpd_certified: true, total_transformation: true },
    { pricing_name: "Hybrid meetup", just_bootcamp: true, cpd_certified: true, total_transformation: true },
    // { pricing_name: "Miami Meetup * for students that are in Miami during the event", just_bootcamp: true, cpd_certified: true, total_transformation: true },
    { pricing_name: "1 month in Balkans ", just_bootcamp: false, cpd_certified: true, total_transformation: true },
    { pricing_name: "2 weekly workout sessions", just_bootcamp: false, cpd_certified: false, total_transformation: true },
    ];
  array_of_bootcamp: Array<string> =
    [
      '12 weeks program',
      'Creative Hub Certificate',
      'Practical Projects',
      'Assignments',
      'Individual Mentor Feedbacks on your Homework',
      'Slack Group',
      'Hybrid meetup',
      'Miami Meetup * for students that are in Miami during the event',
    ];
  array_of_cpd: Array<string> =
    [
      '12 weeks program',
      'Creative Hub Certificate',
      'Practical Projects',
      'Assignments',
      'Individual Mentor Feedbacks on your Homework',
      'Slack Group',
      'Hybrid meetup',
      'Miami Meetup * for students that are in Miami during the event',
      '1 month in Europe '
    ];
  array_of_transformation: Array<string> =
    [
      '12 weeks program',
      'Creative Hub Certificate',
      'Practical Projects',
      'Assignments',
      'Individual Mentor Feedbacks on your Homework',
      'Slack Group',
      'Hybrid meetup',
      'Miami Meetup * for students that are in Miami during the event',
      '1 month in Europe',
      '2 weekly workout sessions'
    ];
  payJustAcademy: string = "https://buy.stripe.com/4gw14g2LA4undy0aEN";
  payTravelAcademy: string = "https://buy.stripe.com/fZe3codqed0T1Pi8wE";
  payTotalAcademy: string = "https://buy.stripe.com/aEU3cofym6Cv9hK7sC";

  pricingTextBg: string = '#F3DDE3';
  annualPricingBg: string = 'black';
  workoutSessionColor: string = 'rgba(255, 107, 59, 1)';

  borderColor: string = 'transparent';
  mainBackground: string = '#F4F3EC';
  titleColor: string = 'rgba(232, 69, 0, 1)';
  questionColor: string = '#2B2B2B';
  accordionBg: string = 'transparent';
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
  }]



}
