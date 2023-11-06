import {Component, OnInit, AfterViewInit, Inject, PLATFORM_ID} from '@angular/core';
import {preInitWheel} from './wheel-test';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-wheel-test',
  templateUrl: './wheel-test.component.html',
  styleUrls: ['./wheel-test.component.scss']
})
export class WheelTestComponent implements AfterViewInit {
  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      preInitWheel();
    }
  }
}
