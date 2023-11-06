import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouMiniHrInformationComponent } from './thank-you-mini-hr-information.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: ThankYouMiniHrInformationComponent
}]

@NgModule({
  declarations: [
    ThankYouMiniHrInformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ThankYouMiniHrInformationComponent
  ]
})
export class ThankYouMiniHrInformationModule { }
