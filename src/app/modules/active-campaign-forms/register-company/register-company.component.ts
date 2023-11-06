import { AfterViewInit, Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { initRegisterCompanyForm } from './register-company';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {
  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
    initRegisterCompanyForm();
    }
  }
}
