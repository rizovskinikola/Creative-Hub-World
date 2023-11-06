import { AfterViewInit, Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import {initFreeCourseGraphicForm} from "./free-course-graphic";
import {isPlatformBrowser} from "@angular/common";
@Component({
  selector: 'app-free-course-graphic',
  templateUrl: './free-course-graphic.component.html',
  styleUrls: ['./free-course-graphic.component.scss']
})
export class FreeCourseGraphicComponent implements OnInit {

  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    initFreeCourseGraphicForm();
    }
  }
}
