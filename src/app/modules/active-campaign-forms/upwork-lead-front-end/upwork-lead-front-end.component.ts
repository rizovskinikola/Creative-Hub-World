import {Component, OnInit, AfterViewInit, Inject, PLATFORM_ID} from '@angular/core';
import { initUpworkLeadFrotnEndForm } from './upwork-lead-front-end';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-upwork-lead-front-end',
  templateUrl: './upwork-lead-front-end.component.html',
  styleUrls: ['./upwork-lead-front-end.component.scss']
})
export class UpworkLeadFrontEndComponent implements OnInit {
  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    initUpworkLeadFrotnEndForm();
    }
  }

}
