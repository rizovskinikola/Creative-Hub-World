import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ThankYouMiniDigitalMarketingInformationComponent } from './thank-you-mini-digital-marketing-information.component';

const routes: Routes = [{
  path: '',
  component: ThankYouMiniDigitalMarketingInformationComponent
}]

@NgModule({
  declarations: [ThankYouMiniDigitalMarketingInformationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ 
    ThankYouMiniDigitalMarketingInformationComponent
  ]
})
export class ThankYouMiniDigitalMarketingInformationModule { }
