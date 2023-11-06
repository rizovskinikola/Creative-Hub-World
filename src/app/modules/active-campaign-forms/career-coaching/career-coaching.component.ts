import {AfterViewInit, Component, Inject, PLATFORM_ID} from '@angular/core';
import {initCareerCoachingForm} from './career-coaching';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-career-coaching',
  templateUrl: './career-coaching.component.html',
  styleUrls: ['./career-coaching.component.scss']
})
export class CareerCoachingComponent implements AfterViewInit {
  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      initCareerCoachingForm();
    }
  }
}
