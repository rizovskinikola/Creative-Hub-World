import { Component, OnInit } from '@angular/core';
import { pdf } from './intro-to-data-science';

@Component({
  selector: 'app-intro-to-data-science',
  templateUrl: './intro-to-data-science.component.html',
  styleUrls: ['./intro-to-data-science.component.scss']
})
export class IntroToDataScienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    pdf();
  }

}
