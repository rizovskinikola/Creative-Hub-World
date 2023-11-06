import {Component, OnInit, AfterViewInit, Inject, PLATFORM_ID} from '@angular/core';
import { initUpworkLeadGraphicForm } from './upwork-lead-graphic';
import {isPlatformBrowser} from "@angular/common";
@Component({
  selector: 'app-upwork-lead-graphic',
  templateUrl: './upwork-lead-graphic.component.html',
  styleUrls: ['./upwork-lead-graphic.component.scss']
})
export class UpworkLeadGraphicComponent implements OnInit {
  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }


  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    initUpworkLeadGraphicForm();
    }
  }

}
