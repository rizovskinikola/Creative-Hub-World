import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {initHackathonsForm} from "./hackathons-form";
import {isPlatformBrowser} from "@angular/common";
@Component({
  selector: 'app-hackathons-form',
  templateUrl: './hackathons-form.component.html',
  styleUrls: ['./hackathons-form.component.scss']
})
export class HackathonsFormComponent implements OnInit {
  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    initHackathonsForm();
    }
  }
}
