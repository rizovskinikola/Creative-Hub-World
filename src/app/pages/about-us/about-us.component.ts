import {Component} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent{
    footerBorder: string = 'linear-gradient(180deg, #5DA0EF 0%, rgba(255, 255, 255, 0) 43.51%)';
    arrowBg: string = 'linear-gradient(162.44deg, #FE693A 0%, #FF2D00 100%)'

  ourTeam: any[] = [{
    image: 'assets/about-us/ariana.png',
    name: 'Ariana',
    title: 'CEO & Co-founder'
  }, {
    image: 'assets/about-us/bobby.png',
    name: 'Bobby',
    title: 'CEO & Co-founder'
  }, {
    image: 'assets/about-us/steve.png',
    name: 'Steve',
    title: 'Former student, now Community Manager'
  }, {
    image: 'assets/about-us/sonya.png',
    name: 'Sonya',
    title: 'Former student, now Student Success Manager'
  }, {
    image: 'assets/about-us/alex.png',
    name: 'Alex',
    title: 'Former student, now full-time UX/UI designer'
  }, {
    image: 'assets/about-us/nick.png',
    name: 'Nick',
    title: 'Full-stack Developer'
  }, {
    image: 'assets/about-us/maria.png',
    name: 'Maria',
    title: 'Former student, now Student Administration Manager'
  }, {
    image: 'assets/about-us/sandra.png',
    name: 'Sandra',
    title: 'Former student, now full-time Graphic designer'
  }];

}
