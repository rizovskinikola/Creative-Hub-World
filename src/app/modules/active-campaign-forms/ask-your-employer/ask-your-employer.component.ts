import { Component, OnInit } from '@angular/core';
import { initAskYourCareer } from './ask-your-employer';

@Component({
  selector: 'app-ask-your-employer',
  templateUrl: './ask-your-employer.component.html',
  styleUrls: ['./ask-your-employer.component.scss']
})
export class AskYourEmployerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

    initAskYourCareer();

  }

}
