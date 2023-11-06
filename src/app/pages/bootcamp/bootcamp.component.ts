import { Component, OnInit } from '@angular/core';
import {AcademyOptions} from "./bootcamp-academy-card/bootcamp-academy-card.component";

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.scss']
})
export class BootcampComponent implements OnInit {
    footerBorder = 'linear-gradient(180deg, #EF5DA8 0%, rgba(255, 255, 255, 0) 43.51%)'
    arrowBg = "linear-gradient(223.57deg, #EF5DA8 46.58%, #FFDA44 110.23%)"

  graphicDesignAcademyOptions: AcademyOptions = {
    key: 'graphic-design-bootcamp',
    title: 'Graphic design Bootcamp',
    image: 'assets/bootcamp/card-1-img.png',
    price: 312,
    lessonsNumber: 160,
    color: 'linear-gradient(231.38deg, #5DA0EF 34.17%, #44FF78 119.03%)',
    borderColor: 'linear-gradient(250.56deg, rgba(93, 160, 239, 0) 27.86%, #5DA0EF 53.09%, rgba(93, 160, 239, 0) 75.36%)',
    gradientStopColor1: '#5DA0EF',
    gradientStopColor2: '#44FF78',
    languageBgColor: '#D1FFF1',
    routerLink: '/graphic-design',
  }

  dataScienceAcademyOptions: AcademyOptions = {
    key: 'data-science-bootcamp',
    title: 'Data science Bootcamp',
    image: 'assets/bootcamp/card-2-img.png',
    price: 416,
    lessonsNumber: 152,
    color: 'linear-gradient(162.44deg, #FF6B3B 0%, #EF4526 100%)',
    borderColor: 'linear-gradient(250.56deg, rgba(247, 90, 49, 0) 27.86%, #F24D2A 53.09%, rgba(242, 76, 42, 0) 75.36%)',
    gradientStopColor1: '#FF6B3B',
    gradientStopColor2: '#EF4526',
    languageBgColor: '#FFE3DB',
    routerLink: '/data-science'
  }

  frontendAcademyOptions: AcademyOptions = {
    key: 'front-end-bootcamp',
    title: 'Front-End Bootcamp',
    image: 'assets/bootcamp/card-3-img.png',
    price: 416,
    lessonsNumber: 185,
    color: 'linear-gradient(162.44deg, #5162FF 0%, #778DFF 100%)',
    borderColor: 'linear-gradient(250.56deg, rgba(96, 114, 255, 0) 27.86%, #596CFF 53.09%, rgba(90, 109, 255, 0) 75.36%)',
    gradientStopColor1: '#5162FF',
    gradientStopColor2: '#778DFF',
    languageBgColor: '#E6FBFF',
    routerLink: '/front-end',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
