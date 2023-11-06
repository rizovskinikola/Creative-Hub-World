import { AfterViewInit, Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import {initFreeCourseDataScienceForm} from "./free-course-data-science";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-free-coruse-data-science',
  templateUrl: './free-coruse-data-science.component.html',
  styleUrls: ['./free-coruse-data-science.component.scss']
})
export class FreeCoruseDataScienceComponent implements OnInit {

  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    initFreeCourseDataScienceForm();
    }
  }

}
