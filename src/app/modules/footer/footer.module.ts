
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./footer.component";
import {RouterModule} from "@angular/router";
import {CareerCoachingModule} from '../active-campaign-forms/career-coaching/career-coaching.module';


@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CareerCoachingModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {
}
