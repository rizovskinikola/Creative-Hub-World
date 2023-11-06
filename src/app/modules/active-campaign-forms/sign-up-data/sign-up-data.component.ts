import { Component, OnInit, AfterViewInit,  Inject, PLATFORM_ID } from '@angular/core';
import { initSignUpDataForm } from './sign-up-data';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-sign-up-data',
  templateUrl: './sign-up-data.component.html',
  styleUrls: ['./sign-up-data.component.scss']
})
export class SignUpDataComponent implements OnInit {

  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    initSignUpDataForm();
    }
  }

}
