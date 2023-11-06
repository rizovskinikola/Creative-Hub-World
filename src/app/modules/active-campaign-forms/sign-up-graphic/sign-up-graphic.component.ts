import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { initSignUpGraphicForm } from './sign-up-graphic';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-sign-up-graphic',
  templateUrl: './sign-up-graphic.component.html',
  styleUrls: ['./sign-up-graphic.component.scss']
})
export class SignUpGraphicComponent implements OnInit {

  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    initSignUpGraphicForm();
    }
  }
}
