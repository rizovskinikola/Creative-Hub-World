import { AfterContentInit,  Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import { initUpworkLeadDataScienceForm } from './upwork-lead-data-science';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-upwork-lead-data-science',
  templateUrl: './upwork-lead-data-science.component.html',
  styleUrls: ['./upwork-lead-data-science.component.scss']
})
export class UpworkLeadDataScienceComponent implements OnInit {
  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    initUpworkLeadDataScienceForm();
    }
  }

}
