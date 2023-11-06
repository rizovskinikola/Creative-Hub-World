import { AfterViewInit, Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import {initFreeCourseFrontEndForm} from "./free-course-front-end";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-free-course-front-end',
  templateUrl: './free-course-front-end.component.html',
  styleUrls: ['./free-course-front-end.component.scss']
})
export class FreeCourseFrontEndComponent implements OnInit {

  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    initFreeCourseFrontEndForm();
    }
  }

}
