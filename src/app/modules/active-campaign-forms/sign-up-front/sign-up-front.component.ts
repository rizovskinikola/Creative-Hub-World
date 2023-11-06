import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { initSignUpFrontForm } from './sign-up-front';
import {isPlatformBrowser} from "@angular/common";
@Component({
  selector: 'app-sign-up-front',
  templateUrl: './sign-up-front.component.html',
  styleUrls: ['./sign-up-front.component.scss']
})
export class SignUpFrontComponent implements OnInit {

  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    initSignUpFrontForm();
    }
  }

}
