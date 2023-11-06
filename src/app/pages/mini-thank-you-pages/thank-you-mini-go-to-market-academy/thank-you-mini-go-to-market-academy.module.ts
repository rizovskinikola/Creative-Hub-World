import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ThankYouMiniGoToMarketAcademyComponent } from './thank-you-mini-go-to-market-academy.component';

const routes: Routes = [{
  path: '',
  component: ThankYouMiniGoToMarketAcademyComponent
}]

@NgModule({
  declarations: [ThankYouMiniGoToMarketAcademyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ThankYouMiniGoToMarketAcademyComponent
  ]
})
export class ThankYouMiniGoToMarketAcademyModule { }
