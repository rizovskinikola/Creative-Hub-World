import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouMiniDigitalMarketingAcademyComponent } from './thank-you-mini-digital-marketing-academy.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [{
  path: '',
  component: ThankYouMiniDigitalMarketingAcademyComponent
}]

@NgModule({
  declarations: [ThankYouMiniDigitalMarketingAcademyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ThankYouMiniDigitalMarketingAcademyComponent
  ]
})
export class ThankYouMiniDigitalMarketingAcademyModule { }
