import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hackathons',
  templateUrl: './hackathons.component.html',
  styleUrls: ['./hackathons.component.scss']
})
export class HackathonsComponent implements OnInit {
  footerBorder = 'linear-gradient(180deg, #F34E2B 0%, rgba(255, 255, 255, 0) 43.51%)'
  arrowBg = 'linear-gradient(162.44deg, #FE693A 0%, #FF2D00 100%)'

  constructor() {
  }

  ngOnInit(): void {
  }

}
