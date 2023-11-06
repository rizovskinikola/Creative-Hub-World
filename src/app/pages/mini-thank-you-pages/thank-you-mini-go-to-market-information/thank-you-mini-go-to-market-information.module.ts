import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ThankYouMiniGoToMarketInformationComponent } from './thank-you-mini-go-to-market-information.component';

const routes: Routes = [{
  path: '',
  component: ThankYouMiniGoToMarketInformationComponent
}]

@NgModule({
  declarations: [ThankYouMiniGoToMarketInformationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ThankYouMiniGoToMarketInformationComponent
  ]
})
export class ThankYouMiniGoToMarketInformationModule { }
