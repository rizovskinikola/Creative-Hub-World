import {AfterViewInit, Component, OnInit } from '@angular/core';
import {initFrontendFreeCourseForm} from "./fromtest";

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.scss']
})
export class FormtestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    initFrontendFreeCourseForm();
  }

}
